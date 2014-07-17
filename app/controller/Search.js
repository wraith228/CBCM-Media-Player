Ext.define('MyApp.controller.Search', {
	extend : 'Ext.app.Controller',
 
	config: {
		profile: Ext.os.deviceType.toLowerCase(),
		stores : ['Videos'],
		models : ['Video'],
		refs: {
			myContainer: 'sarchPanel',
			myContainer: 'mainPanel',
		},
		control: {
			'mainPanel': {
				activate: 'onActivate'
			},
			'searchPanel searchfield[itemId=searchBox]' : {
				clearicontap : 'onClearSearch',
				keyup: 'onSearchKeyUp'
			},
			
			'button[action=callHelp]': {
				tap: 'helpPop'
			},
			
			'button[action=callSettings]': {
				tap: 'settingsPop'
			},
			'button[action=callHome]': {
				tap: 'goHome'
			},
			'button[action=callPopular]': {
				tap: 'popularSort'
			},
			'button[action=callLive]': {
				tap: 'callLive'
			},
			'button[action=callAdded]': {
				tap: 'addedSort'
			},
			'list[action=getLink]' : {
				itemtap: 'videoTap',
			},
			
			'button[action=goBack]': {
				tap: 'goBack'
			}
		} 
	},
	
	onActivate: function() {
		console.log('Main container is active');
	},
	
	videoTap: function(view, index, target, record, event) {
		console.log(record.get('name'));
		Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);  
		Ext.Viewport.setActiveItem(Ext.widget('videoPanel'));
	},
	
	//search function
	onSearchKeyUp: function(searchField) {
		Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);  
		Ext.Viewport.setActiveItem(Ext.widget('resultsPanel'));
		queryString = searchField.getValue();
		searchGlobal = queryString;
		console.log(this,'Searching by: ' + queryString);
		
		congFilt = null;
		speakFilt = null;
		topicFilt = null;
		
		var store = Ext.getStore('Videos');
		store.clearFilter();

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
	
	//clear search function
	onClearSearch: function() {
		console.log('Clear icon is tapped');
		var store = Ext.getStore('Videos');
		store.clearFilter();
	},
	
	//go home function
	goHome: function() {
		var menuPanel = Ext.Viewport.down('menuPanel');
		if (menuPanel) {
			menuPanel.hide();
		}
		//Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);  
		Ext.Viewport.setActiveItem(Ext.widget('mainPanel'));
		var store = Ext.getStore('Videos');
		store.clearFilter();
		MyApp.app.getController('Search').popularSort();
	},
	
	//popularity store sort function
	popularSort: function() {
		var store = Ext.getStore('Videos');
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
	
	//livestreams call
	callLive: function() {
		var store = Ext.getStore('Videos');		
		//store.sort();
	},
	
	//date store sort function
	addedSort: function() {
		var store = Ext.getStore('Videos');		
		store.sort('postDate', 'DESC');
	},
	
	//initialize function
	init: function() {
		console.log('Controller initialized');
	},
	
	
	
	//search bar overlay function
	searchPop: function(searchPanel) {
		var menuPanel = Ext.Viewport.down('menuPanel');
		if (menuPanel) {
			menuPanel.hide();
		}
		var searchPanel = Ext.Viewport.down('searchPanel');
		if (!searchPanel) {
			searchPanel = Ext.widget('searchPanel');
		}
		searchPanel.reset();
		searchPanel.showBy(searchPanel, 'bl-tl?');
	},

	//settings view function
	settingsPop: function() {
		var menuPanel = Ext.Viewport.down('menuPanel');
		if (menuPanel) {
			menuPanel.hide();
		}
		//Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);	
		Ext.Viewport.setActiveItem(Ext.widget('settingsPanel'));
	},
	
	//help view function
	helpPop: function() {
		var menuPanel = Ext.Viewport.down('menuPanel');
		if (menuPanel) {
			menuPanel.hide();
		}
		//Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
		Ext.Viewport.setActiveItem(Ext.widget('helpPanel'));
	},
	
	
	
	goBack: function() {
		history.back();
	}
});