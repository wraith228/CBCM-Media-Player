Ext.define('MyApp.controller.Processes', {
	extend : 'Ext.app.Controller',
 
	config: {
		profile: Ext.os.deviceType.toLowerCase(),
		stores : ['Videos','SearchRecords'],
		models : ['Video','SearchModel'],
		refs: {
			myContainer: 'sarchPanel',
			myContainer: 'View',
			playOverlay: {
                autoCreate: true,
                selector: '#companies',
                xtype: 'companies'
            }
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
		} 
	},
	
	onActivate: function() {

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
		
		var searchLabel = Ext.getCmp('searchLabel');
		searchLabel.setHtml('<div class=textPanel3>Search results for '+queryString+':<div>');
		
		searchGlobal = queryString;
		console.log(this,'Searching by: ' + queryString);
		
		congFilt = null;
		speakFilt = null;
		topicFilt = null;
		
		var store = Ext.getStore('Videos');
		store.clearFilter();
		store.sort('postDate', 'DESC');

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
		var noticeBar = Ext.getCmp('noticeBar');
		noticeBar.setHtml('<div class="textPanel2">Added to playlist<div>');
		var playStore = Ext.getStore('Playlist');
		var store = Ext.getStore('Videos');
		playStore.add(listGlobal);
	},
	
	closeMenus: function() {
		var menu = Ext.getCmp('dropMenu');
		menu.hide();
		var search = Ext.getCmp('searchBar');
		search.hide();
	},
	
	playTap: function(list, e, options) {
		var me = this;
        var popup = me.getPlayOverlay();
        popup.showBy(button);
	}
});