Ext.define('MyApp.controller.Processes', {
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
			'searchfield' : {
				newSearch : 'onNewSearch'
			},	
			'button[action=callPopular]': {
				tap: 'popularSort'
			},
			'button[action=callAdded]': {
				tap: 'addedSort'
			},		
		} 
	},
	
	onActivate: function() {
		console.log('Main container is active');
	},
	
	//search function
	onNewSearch: function(searchField) {
		queryString = searchField.getValue();
		Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);  
		Ext.Viewport.setActiveItem(Ext.widget('resultsPanel'));
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
});