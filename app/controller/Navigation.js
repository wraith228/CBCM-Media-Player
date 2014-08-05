Ext.define('MyApp.controller.Navigation', {
	extend : 'Ext.app.Controller',
 
	config: {
		profile: Ext.os.deviceType.toLowerCase(),
		stores : ['Videos','NameRecord'],
		models : ['Video','NameModel'],
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
			'button[action=vidPlay]': {
				tap: 'vidPlay'
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
		var titlePanel = Ext.getCmp('titlePanel');
		titlePanel.show();
		var title = Ext.getCmp('titleBox');
		title.setHtml('<div class="textPanel">Settings<div>');
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
		var titlePanel = Ext.getCmp('titlePanel');
		titlePanel.show();
		var title = Ext.getCmp('titleBox');
		title.setHtml('<div class="textPanel">Help<div>');
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
		var titlePanel = Ext.getCmp('titlePanel');
		titlePanel.show();
		var title = Ext.getCmp('titleBox');
		title.setHtml('<div class="textPanel">Livestreams<div>');
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
		var titlePanel = Ext.getCmp('titlePanel');
		titlePanel.show();
		var title = Ext.getCmp('titleBox');
		title.setHtml('<div class="textPanel">Playlist<div>');
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
		var titlePanel = Ext.getCmp('titlePanel');
		titlePanel.show();
		var title = Ext.getCmp('titleBox');
		title.setHtml('<div class="textPanel">'+name+'<div>');
		
		//adds video name to store for back navigation
		var nameStore = Ext.getStore('NameRecord');
		nameStore.add({vidName: name});
		
		listGlobal = record;
		var views = record.get('views');
	        var postDate = record.get('postDate');
	        var detailPanel = Ext.getCmp('Details');
	        detailPanel.setHtml('<div>Post Date: '+postDate+', Views: '+views+'<div>');
	        var description = record.get('description');
	        var descriptionPanel = Ext.getCmp('description');
	        descriptionPanel.setHtml('<div>'+description+'<div>');
	},
	
	//play playlist video
	vidPlay: function() {
		var overlay = Ext.getCmp('playOverlay');
		overlay.destroy();
		MyApp.app.getController('Processes').closeMenus();
		var main = Ext.getCmp('main');
		var active = main.getActiveItem().xtype;
		if (active != 'videoPanel') {
			main.push({
				xtype: 'videoPanel'
			});
		}
		
		var name = listGlobal.get('name');
		var titlePanel = Ext.getCmp('titlePanel');
		titlePanel.show();
		var title = Ext.getCmp('titleBox');
		title.setHtml('<div class="textPanel">'+name+'<div>');
		
		//adds video name to store for back navigation
		var nameStore = Ext.getStore('NameRecord');
		nameStore.add({vidName: name});
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
			var filters = Ext.getCmp('filters');
			filters.hide();
		}
		
		//removes last video name in store for back navigation
		if (active == 'videoPanel') {
			var nameStore = Ext.getStore('NameRecord');
			var last = nameStore.last();
			nameStore.remove(last);
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
			var title = Ext.getCmp('titlePanel');
			title.hide();
			var catMenu = Ext.getCmp('catMenu');
			catMenu.show();
		}
		
		//resets to previous search filter
		if (active == 'resultsPanel') {
			MyApp.app.getController('Processes').searchReset();
			var filters = Ext.getCmp('filters');
			filters.show();
			var title = Ext.getCmp('titlePanel');
			title.hide();
		}
		
		if (active == 'settingsPanel') {
			var titlePanel = Ext.getCmp('titlePanel');
			titlePanel.show();
			var title = Ext.getCmp('titleBox');
			title.setHtml('<div class="textPanel">Settings<div>');
		}
		
		if (active == 'livePanel') {
			var titlePanel = Ext.getCmp('titlePanel');
			titlePanel.show();
			var title = Ext.getCmp('titleBox');
			title.setHtml('<div class="textPanel">Livestreams<div>');
		}
		
		if (active == 'playlistPanel') {
			var titlePanel = Ext.getCmp('titlePanel');
			titlePanel.show();
			var title = Ext.getCmp('titleBox');
			title.setHtml('<div class="textPanel">Playlist<div>');
		}
		
		if (active == 'helpPanel') {
			var titlePanel = Ext.getCmp('titlePanel');
			titlePanel.show();
			var title = Ext.getCmp('titleBox');
			title.setHtml('<div class="textPanel">Help<div>');
		}
		
		if (active == 'videoPanel') {
			var titlePanel = Ext.getCmp('titlePanel');
			titlePanel.show();
			var title = Ext.getCmp('titleBox');
			var nameStore = Ext.getStore('NameRecord');
			var name = nameStore.last().get('vidName');
			title.setHtml('<div class="textPanel">'+name+'<div>');
		}
	}
});
