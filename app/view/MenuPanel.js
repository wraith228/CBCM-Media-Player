//menu overlay view
Ext.define('MyApp.view.MenuPanel', {
    extend: 'Ext.form.Panel',
    alias : 'widget.menuPanel',
 
    config: {		
		layout: 'fit',
		modal: true,
		hideOnMaskTap: true,
		//top: 0,	
		
		showAnimation: {
			type: 'slideIn',
			direction: 'right'
		},
		hideAnimation: {
			type: 'slideOut',
			direction: 'left',
		},
				
		items: [
			{
				xtype: 'panel',
				docked: 'left',
				width: 300,
				height: window.innerHeight -7,	
				
				items: [
					{
						xtype: 'toolbar',
						docked: 'top',
						
						items: [
							{
								xtype: 'button',
								text: 'Settings',
								align: 'right',
								itemID: 'settingsBtn',
								action: 'callSettings',
								width: 300,
							}
						]
					},
					{
						xtype: 'toolbar',
						docked: 'top',
						items: [
							{
								xtype: 'button',
								text: 'Playlists',
								align: 'right',
								itemID: 'playlistBtn',
								action: 'callPlaylists',
								width: 300,
							}
						]
					},
					{
						xtype: 'toolbar',
						docked: 'top',						
						items: [
							{
								xtype: 'button',
								text: 'Help',
								align: 'right',
								itemID: 'helpBtn',
								action: 'callHelp',
								width: 300,
							}
						]
					},
					{
						xtype: 'toolbar',
						docked: 'top',						
						items: [
							{
								xtype: 'button',
								text: 'Privacy & Terms',
								align: 'right',
								itemID: 'privacyBtn',
								action: 'callPrivacy',
								width: 300,
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