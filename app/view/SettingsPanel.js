//settings view
Ext.define('MyApp.view.SettingsPanel', {
    extend: 'Ext.form.Panel',
    alias : 'widget.settingsPanel',
 
    config: {
		xtype: 'panel',
		layout: 'vbox',         
		items: [
			//menu code
			{
				xtype: 'titlebar',
				baseCls: 'titleBar',
				docked: 'top',
				id: 'cbcmTitle',
				height: 50,
				
				items: [
					//menu button
					{
						xtype: 'button',
						baseCls: 'moreBtn',
						itemID: 'menuBtn',
						action: 'callMenu',
						align: 'left',

					},
											
					//search button
					{

						xtype: 'button',
						baseCls: 'searchBtn',
						itemId: 'searchBtn',
						action: 'callSearch',
						align: 'right'
					},
					//home button
					{
						xtype: 'button',
						baseCls: 'homeBtn',
						itemId: 'homeBtn',
						action: 'callHome',
						align: 'left'
					},
				]
			},
			{
				xtype: 'panel',
				id: 'dropMenu',
				hidden: true,
				items: [
					
					{
						xtype: 'toolbar',
						baseCls: 'titleBar',
						items: [
							{
							 xtype: 'button',
							 baseCls: 'liveBtn',
							 width: window.innerWidth
							}
						]
					},
					{
						xtype: 'toolbar',
						baseCls: 'titleBar',
						items: [
							{
							 xtype: 'button',
							 baseCls: 'favoritesBtn',
							 width: window.innerWidth
							}
						]
					},
					{
						xtype: 'toolbar',
						baseCls: 'sepBar'
					},
					{
						xtype: 'toolbar',
						baseCls: 'titleBar',
						items: [
							{
							 xtype: 'button',
							 baseCls: 'settingsBtnUsed',
							 width: window.innerWidth
							}
						]
					},
					{
						xtype: 'toolbar',
						baseCls: 'titleBar',
						items: [
							{
							 xtype: 'button',
							 baseCls: 'helpBtn',
							 width: window.innerWidth,
							 action: 'callHelp'
							}
						]
					}
				]
			},
			{
				xtype: 'toolbar',
				baseClas: 'titlebar',
				id: 'searchBar',
				hidden: true,
				items: [
					{
						xtype: 'spacer',
						width: 10
					},
					{
						xtype: 'searchfield',
						placeHolder: 'Search...',
						itemId: 'searchBox',
						width: window.innerWidth - 20,
					}
				]
			},
			{
				xtype: 'panel',				
				height: 35,
				baseCls: 'popBar'
			},
			/*
			{
				xtype: 'toolbar',
				docked: 'top',
				title: 'Settings',
				items: [
					{
						xtype: 'button',
						iconCls: 'arrow_left',
						action: 'goBack',
						align: 'left'

					}
				]
			},
			*/
			{
				xtype: 'panel',
				html: 'settings'
			}
		]
    }
});