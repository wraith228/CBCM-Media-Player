Ext.define('MyApp.controller.Menu', {
	extend : 'Ext.app.Controller',
 
	config: {
		profile: Ext.os.deviceType.toLowerCase(),
		stores : ['Videos'],
		models : ['Video'],
		refs: {
			myContainer: 'mainPanel',
			mainPanel: '#dropMenu',
			searchBar: 'mainPanel #searchBar'
		},
		control: {
			'button[action=callMenu]': {
				tap: 'menuDrop'
			},
			'button[action=callSearch]': {
				tap: 'searchDrop'
			},
			'myList': {
				itemtap: 'selectDrop'
			},
		} 
	},
	
	//menu drop function
	menuDrop: function() {
	console.log('pressed');
		var menu = Ext.getCmp('dropMenu');
		if (menu.isHidden()) {
			menu.show();
		}	
		else {
			menu.hide();
		}
	},
	//searchfield drop function
	searchDrop: function() {
		var search = Ext.getCmp('searchBar');
		if (search.isHidden()) {
			search.show();
		}	
		else {
			search.hide();
		}
	},
	//selectfields drop function
	selectDrop: function() {
		var select = Ext.getCmp('selectDrop');
		var button = Ext.getCmp('filterBtn');
		if (select.isHidden()) {
			select.show();
			button.setCls('arrowDownBtn');
		}	
		else {
			select.hide();
			button.setCls('arrowBtn');
		}
	}
});