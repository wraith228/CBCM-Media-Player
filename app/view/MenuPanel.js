//menu overlay view
Ext.define('MyApp.view.MenuPanel', {
    extend: 'Ext.form.Panel',
    alias : 'widget.menuPanel',
 
    config: {
		xtype: 'panel',
		layout: 'hbox',
		top: 0,			
		items: [
			{
				xtype: 'panel',
				docked: 'left',
				width: 200,
				
				items: [
					//menu button
					{
						xtype: 'toolbar',
						docked: 'top',
						//title: 'CBCM',
						items: [
							{
							xtype: 'button',
							baseCls: 'moreBtn',
							itemID: 'menuBtn',
							action: 'closeMenu',
							},
							{
								xtype: 'panel',
								//html: 'CBCM',
							}
						]
					},
					{
						xtype: 'toolbar',
						docked: 'top',
						
						items: [
							{
								xtype: 'spacer',
								width: 10
							},
							{
								xtype: 'searchfield',
								placeHolder: 'Search...',
								itemId: 'searchBox',
								align: 'center',
								width: 180
							}
						]
					},
					{
						xtype: 'toolbar',
						docked: 'top',
						layout: 'fit',
						items: [
							{
								iconCls: 'home',
								text: 'Home',
								action: 'callHome',
							}
						]
					},
					{
						xtype: 'toolbar',
						docked: 'top',
						layout: 'fit',						
						items: [
							{
								iconCls: 'action',
								text: 'Livestreams'
							}
						]
					},
					{
						xtype: 'toolbar',
						docked: 'top',
						layout: 'fit',
						items: [
							{
								iconCls: 'favorites',
								text: 'Playlist'
							}
						]
					},
					{
						xtype: 'toolbar',
						docked: 'top',
						layout: 'fit',
						items: [
							{
								iconCls: 'settings',
								text: 'Settings',
								action: 'callSettings',
							}
						]
					},
					{
						xtype: 'toolbar',
						docked: 'top',
						layout: 'fit',
						items: [
							{
								iconCls: 'info',
								text: 'Help',
								action: 'callHelp',
							}
						]
					},
					{
						xtype: 'toolbar',
						docked: 'top',
						height: window.innerHeight
					}
				]
			}
		]  
    }
});