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
			}
		]
    }
});