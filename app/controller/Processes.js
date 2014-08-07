Ext.define('MyApp.controller.Processes', {
	extend : 'Ext.app.Controller',
 
	config: {
		profile: Ext.os.deviceType.toLowerCase(),
		stores : ['Videos','SearchRecords'],
		models : ['Video','SearchModel'],
		refs: {
			myContainer: 'sarchPanel',
			myContainer: 'View',
		},
		control: {
			'View': {
				activate: 'onActivate'
			},			
			'searchfield': {
				newSearch : 'onNewSearch'
			},	
			'button[action=callPopular]': {
				tap: 'popularSort'
			},
			'button[action=callAdded]': {
				tap: 'addedSort'
			},	
			'button[action=addPlaylist]': {
				tap: 'addPlay'
			},
			'list[action=tapPlay]': {
				itemtap: 'playTap'
			},
			'button[action=deleteVid]': {
				tap: 'deleteVid'
			}
		} 
	},
	
	onActivate: function() {
		var store = Ext.getStore('Videos');
		var last = store.last();
		listGlobal=last;
	},
	
	//search function
	onNewSearch: function(searchField) {
		queryString = searchField.getValue();
		MyApp.app.getController('Processes').closeMenus();
		
		var searchStore = Ext.getStore('SearchRecords');
		searchStore.add({query: queryString});

		var main = Ext.getCmp('main');
		var active = main.getActiveItem().xtype;
		
		main.push({
			xtype: 'resultsPanel'
		});
		
		//show/hide menu panels
		var filters = Ext.getCmp('filters');
		filters.show();
		var title = Ext.getCmp('titlePanel');
		title.hide();
		var catMenu = Ext.getCmp('catMenu');
		catMenu.hide();
		var vidDrop = Ext.getCmp('vidDrop');
		vidDrop.hide();
		var overlay = Ext.getCmp('addedOverlay');
		if (overlay) {
			overlay.destroy();
		}
		
		var searchLabel = Ext.getCmp('searchLabel');
		searchLabel.setHtml('<div class=textPanel3>Search results for '+queryString+':<div>');
		
		searchGlobal = queryString;
		console.log(this,'Searching by: ' + queryString);
		
		//reset global filters
		congFilt = null;
		speakFilt = null;
		topicFilt = null;
		
		var store = Ext.getStore('Videos');
		store.clearFilter();
		store.sort('postDate', 'DESC');
		
		//search filters
		if(queryString){
			var thisRegEx = new RegExp(queryString, "i");
			store.filterBy(function(record) {
				if (thisRegEx.test(record.get('name')) ||
				  thisRegEx.test(record.get('postDate')) ||
				  thisRegEx.test(record.get('cong')) ||
				  thisRegEx.test(record.get('speaker')) ||
				  thisRegEx.test(record.get('topic'))) {
					return true;
				};
				return false;
			});
		}
	},
	
	//reset to previous search function
	searchReset: function() {
		var searchStore = Ext.getStore('SearchRecords');
		var last = searchStore.last().get('query');
		
		congFilt = null;
		speakFilt = null;
		topicFilt = null;
		console.log(this,'Reseting search to: ' + last);
		var store = Ext.getStore('Videos');
		store.clearFilter();

		if(last){
			var thisRegEx = new RegExp(last, "i");
			store.filterBy(function(record) {
				if (thisRegEx.test(record.get('name')) ||
					thisRegEx.test(record.get('postDate')) ||
					thisRegEx.test(record.get('cong')) ||
					thisRegEx.test(record.get('speaker')) ||
					thisRegEx.test(record.get('topic'))) {
						return true;
					};
				return false;
			});
		}
	},
	
	//popularity store sort function
	popularSort: function() {
		var category = Ext.getCmp('catPanel');
		category.setHtml('<div class="textPanel">Popular<div>');
		var store = Ext.getStore('Videos');
		var catMenu = Ext.getCmp('categoryDrop');
		catMenu.hide();
		var button = Ext.getCmp('catBtn');
		button.setCls('arrowBtn');	
		var popSorter = [{
			sorterFn: function(video1, video2) {
				//popularity sort algorithm
				var sDate1 = video1.get('postDate'),
				v1 = video1.get('views'),
				eDate = new Date(),
				t1 = ((eDate.getTime() - sDate1.getTime()) / 3600000),
				pop1 = ((v1+1)/((t1+2)^1.5)),
				sDate2 = video2.get('postDate'),
				v2 = video2.get('views'),
				t2 = ((eDate.getTime() - sDate2.getTime()) / 3600000),
				pop2 = ((v2+1)/((t2+2)^1.5));
			
				return pop1 < pop2 ? 1 : (pop1 > pop2 ? -1 : 0);
			}
		}];
		store.sort(popSorter);
	},
	
	//date store sort function
	addedSort: function() {
		var category = Ext.getCmp('catPanel');
		var catMenu = Ext.getCmp('categoryDrop');
		var store = Ext.getStore('Videos');
		var button = Ext.getCmp('catBtn');
		button.setCls('arrowBtn');		
		catMenu.hide();
		category.setHtml('<div class="textPanel">Recent<div>');
		store.sort('postDate', 'DESC');
	},
	
	//initialize function
	init: function() {
		console.log('Controller initialized');
	},
	
	//add to playlist function
	addPlay: function() {
		var playStore = Ext.getStore('Playlist');
		var store = Ext.getStore('Videos');
		var nameStore = Ext.getStore('NameRecord');
		var recTemp = listGlobal.setId(nameStore.getCount()+1)
		playStore.add(listGlobal);
		
		//notification overlay
		
		var popup = Ext.create('MyApp.view.AddedOverlay');
		Ext.Viewport.add(popup);
		popup.show();
		
	},
	
	//close menus when navigating
	closeMenus: function() {
		var menu = Ext.getCmp('dropMenu');
		menu.hide();
		var search = Ext.getCmp('searchBar');
		search.hide();
		var filters = Ext.getCmp('filters');
		filters.hide();
		var catMenu = Ext.getCmp('catMenu');
		catMenu.hide();
		var vidDrop = Ext.getCmp('vidDrop');
		vidDrop.hide();
		var overlay = Ext.getCmp('addedOverlay');
		if (overlay) {
			overlay.destroy();
		}
	},
	
	//add playlist overlay
	playTap: function(view, index, target, record, event) {
		listGlobal = record;
		var overlay = Ext.getCmp('playOverlay');
		if (overlay) {
			overlay.destroy();
		}
		var playList = Ext.getCmp('playList');
        var popup = Ext.create('MyApp.view.PlayOverlay');
		Ext.Viewport.add(popup);
		popup.show();
	},
	
	//delete video from playlist
	deleteVid: function() {
		var store = Ext.getStore('Playlist');
		store.remove(listGlobal);
		var overlay = Ext.getCmp('playOverlay');
		overlay.destroy();
	}
});