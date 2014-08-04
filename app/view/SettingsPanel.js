//settings view
Ext.define('MyApp.view.SettingsPanel', {
    extend: 'Ext.form.Panel',
    alias : 'widget.settingsPanel',
 
    config: {
		xtype: 'panel',
		layout: 'vbox',
		style: 'background:#f2f2f2;',
		flex: 1,
		items: [
			{
				xtype: 'panel',				
				baseCls: 'subPanel',
				layout: 'hbox',
				docked: 'top',
				items: [
					{
						xtype: 'spacer',
						width: 12,
					},
					{
						xtype: 'panel',
						baseCls: 'textPanel',
						html: '<div class="textPanel">Settings<div>',
						align: 'left',
						flex: 1
					}
				]
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
			}
		]
    }
});