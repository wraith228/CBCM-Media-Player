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
			'list[action=tapVid]': {
				itemtap: 'videoTap'
			},
			'button[action=goBack]': {
				tap:'goBack'
			}
		}
	},
	
	//go home function
	goHome: function() {
		console.log('Home');
		Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
		Ext.Viewport.setActiveItem(Ext.widget('View'));
		var store = Ext.getStore('Videos');
		store.clearFilter();
		MyApp.app.getController('Processes').popularSort();
	},
	
	//settings view function
	settingsPop: function(button, e, options) {
		MyApp.app.getController('Processes').closeMenus();
		var main = Ext.getCmp('main');
		var active = main.getActiveItem().xtype;
		if (active != 'settingsPanel') {
			main.push({
				xtype: 'settingsPanel'
			});
		}
	},
	
	//help view function
	helpPop: function(button, e, options) {
		MyApp.app.getController('Processes').closeMenus();
		var main = Ext.getCmp('main');
		var active = main.getActiveItem().xtype;
		if (active != 'helpPanel') {
			main.push({
				xtype: 'helpPanel'
			});
		}
	},
	
	//livestream view function
	livePop: function(button, e, options) {
		MyApp.app.getController('Processes').closeMenus();
		var main = Ext.getCmp('main');
		var active = main.getActiveItem().xtype;
		if (active != 'livePanel') {
			main.push({
				xtype: 'livePanel'
			});
		}
	},
	
	//playlist view function
	favPop: function(button, e, options) {
		MyApp.app.getController('Processes').closeMenus();
		var main = Ext.getCmp('main');
		var active = main.getActiveItem().xtype;
		if (active != 'playlistPanel') {
			main.push({
				xtype: 'playlistPanel'
			});
		}
	},
	
	//video view function
	videoTap: function(view, index, target, record, event) {
		MyApp.app.getController('Processes').closeMenus();
		var main = Ext.getCmp('main');
		var active = main.getActiveItem().xtype;
		if (active != 'videoPanel') {
			main.push({
				xtype: 'videoPanel'
			});
		}
		
		var name = record.get('name');
		var namePanel = Ext.getCmp('namePanel');
		namePanel.setHtml('<div class="textPanel">'+name+'<div>');
		
		listGlobal = record;
	},
	
	//back button function
	goBack: function(button, e, options) {
		var main = Ext.getCmp('main');
		var active = main.getActiveItem().xtype;
		
		//removes last search filter
		if (active == 'resultsPanel') {
			var searchStore = Ext.getStore('SearchRecords');
			var last = searchStore.last();
			searchStore.remove(last);
		}
		
		main.pop();
		active = main.getActiveItem().xtype;
		
		//resets home view store filters/sort
		if (active == 'panel') {
			var store = Ext.getStore('Videos');
			store.clearFilter();
			MyApp.app.getController('Processes').popularSort();
			
			var searchStore = Ext.getStore('SearchRecords');
			searchStore.removeAll();
		}
		
		//resets to previous search filter
		if (active == 'resultsPanel') {
			MyApp.app.getController('Processes').searchReset();
		}
	}
});