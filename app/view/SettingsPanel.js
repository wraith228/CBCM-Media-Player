//settings view
Ext.define('MyApp.view.SettingsPanel', {
    extend: 'Ext.form.Panel',
    alias : 'widget.settingsPanel',
 
    config: {
		layout: 'fit',         
		items: [
			//titlebar code
			{
				xtype: 'titlebar',
				docked: 'top',
				id: 'cbcmTitle',
				//title: 'CBCM Media Player',
				
				items: [
					//menu button
					{
						xtype: 'button',
						iconCls: 'user',
						//align: 'left',
						itemID: 'menuBtn',
						action: 'callMenu'
					},
					{
						xtype: 'spacer',
						width: (window.innerWidth /2) - 134
					},
					{
						xtype: 'button',
						text: 'CBCM Media Player',
						
						itemID: 'homeBtn',
						action: 'callHome'
					},
					//search button
					{
						xtype: 'button',
						iconCls: 'search',
						align: 'right',
						itemId: 'searchBtn',
						action: 'callSearch'
					}
				]
			},
			{
				xtype: 'toolbar',
				docked: 'top',
			},
			{
				layout: {
					type: 'vbox',
					align: 'center',
					pack: 'center'
				},		
				items: [
					{
						xtype: 'panel',
						
						items: [
							{
								html: 'settings',
							}
						]
					}
				]
			}
		]
    }
});