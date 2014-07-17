Ext.define('MyApp.controller.Menu', {
	extend : 'Ext.app.Controller',
 
	config: {
		profile: Ext.os.deviceType.toLowerCase(),
		stores : ['Videos'],
		models : ['Video'],
		refs: {
			myContainer: 'mainPanel',
			mainPanel: '#dropMenu',
		},
		control: {
			'button[action=callMenu]': {
				tap: 'menuPop'
			},
			'button[action=callSearch]': {
				tap: 'searchPop'
			},
		} 
	},
	
	//menu overlay function
	menuPop: function() {
		var menu = Ext.getCmp('dropMenu');
		if (menu.isHidden()) {
			menu.show();
		}	
		else {
			menu.hide();
		}
	},

	searchPop: function() {
		var search = Ext.getCmp('searchBar');
		if (search.isHidden()) {
			search.show();
		}	
		else {
			search.hide();
		}
	}
});