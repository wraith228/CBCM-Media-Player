//info overlay view
Ext.define('MyApp.view.InfoPanel', {
    extend: 'Ext.Panel',
    alias : 'widget.infoPanel',
 
    config: {		
		layout: {
			type: 'vbox',
			align: 'center',
			pack: 'center'
		},
		modal: true,
		hideOnMaskTap: true,
		top: 0,		
		items: [
			{
				xtype: 'panel',
				items: [
					{

					}
				]
			}
		]  
    }
});