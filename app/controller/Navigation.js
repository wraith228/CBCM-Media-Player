Ext.define('MyApp.controller.Navigation', {
	extend : 'Ext.app.Controller',
 
	config: {
		profile: Ext.os.deviceType.toLowerCase(),
		stores : ['Videos'],
		models : ['Video'],
		control: {
			'button[action=callHelp]': {
				tap: 'helpPop'
			},		
			'button[action=callSettings]': {
				tap: 'settingsPop'
			},
			'button[action=callLive]': {
				tap: 'livePop'
			},
			'button[action=callFav]': {
				tap: 'favPop'
			},
			'button[action=callHome]': {
				tap: 'goHome'
			},
			'button[action=goBack]': {
				tap: 'goBack'
			},
			'list': {
				itemtap: 'videoTap'
			},
		}
	},
	
	//go home function
	goHome: function() {
		//console.log('Home');
		//Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);  
		Ext.Viewport.setActiveItem(Ext.widget('mainPanel'));
		var store = Ext.getStore('Videos');
		store.clearFilter();
		MyApp.app.getController('Processes').popularSort();
	},
	
	//settings view function
	settingsPop: function() {
		//Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);	
		Ext.Viewport.setActiveItem(Ext.widget('settingsPanel'));
	},
	
	//help view function
	helpPop: function() {
		//Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
		Ext.Viewport.setActiveItem(Ext.widget('helpPanel'));
	},
	
	//livestream view function
	livePop: function() {
		//Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
		Ext.Viewport.setActiveItem(Ext.widget('livePanel'));
	},
	
	//playlist view function
	favPop: function() {
		//Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
		Ext.Viewport.setActiveItem(Ext.widget('playlistPanel'));
	},
	
	goBack: function() {
		history.back();
	},
	
	//video view function
	videoTap: function(view, index, target, record, event) {
		/*
		console.log(record.get('name'));
		Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);  
		Ext.Viewport.setActiveItem(Ext.widget('videoPanel'));
		*/		
	},
});