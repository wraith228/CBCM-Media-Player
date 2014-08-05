//help view
Ext.define('MyApp.view.HelpPanel', {
    extend: 'Ext.form.Panel',
    alias : 'widget.helpPanel',
 
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