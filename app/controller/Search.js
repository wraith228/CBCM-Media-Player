Ext.define('MyApp.controller.Search', {
	extend : 'Ext.app.Controller',
 
	config: {
		profile: Ext.os.deviceType.toLowerCase(),
		stores : ['Videos'],
		models : ['Video'],
		refs: {
			myContainer: 'searchPanel',
		},
		control: {
			'searchPanel': {
				activate: 'onActivate'
			},
			'searchPanel searchfield[itemId=searchBox]' : {
				clearicontap : 'onClearSearch',
				keyup: 'onSearchKeyUp'
			},
			'button[action=callSearch]': {
				tap: 'searchPop'
			},
			'button[action=callInfo]': {
				tap: 'infoPop'
			},
			'button[action=callHome]': {
				tap: 'goHome'
			},
			'button[action=callPopular]': {
				tap: 'popularSort'
			},
			'button[action=callRec]': {
				tap: 'recSort'
			},
			'button[action=callAdded]': {
				tap: 'addedSort'
			},
			/*
			'resultsPanel selectfield[itemId=sortDate]': {
				change: 'getValue'
			},
			*/
		} 
	},
	
	onActivate: function() {
		console.log('Main container is active');
	},
	/*
	getValue: function(field, value) {
		value = value.get(field.getValueField());
		var store = Ext.getStore('Videos');
		Ext.Msg.alert('Selected Item');
		if(temp == 'newest'){
			//Ext.Msg.alert('Selected Item');
			store.sort('postDate', 'DESC');
		}
		else if(temp == 'oldest'){
			store.sort('postDate', 'ASC');
		}
	},
	*/
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
		Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);  
		Ext.Viewport.setActiveItem(Ext.widget('mainPanel'));
		var store = Ext.getStore('Videos');
		store.clearFilter();
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
	
	//category store sort function
	recSort: function() {
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
		var searchPanel = Ext.Viewport.down('searchPanel');
		if (!searchPanel) {
			searchPanel = Ext.widget('searchPanel');
		}
		searchPanel.reset();
		searchPanel.showBy(searchPanel, 'bl-tl?');
	},

	//info overlay function
	infoPop: function() {
		var infoOverlay = Ext.create('MyApp.view.InfoPanel');
		infoOverlay.show();
	}
});