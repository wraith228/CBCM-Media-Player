//search bar overlay view
Ext.define('MyApp.view.SearchPanel', {
    extend: 'Ext.form.Panel',
    alias : 'widget.searchPanel',
 
    config: {		
		layout: 'fit',
		modal: true,
		hideOnMaskTap: true,
		top: 0,	
		left: 0,
		showAnimation: 'slideIn',
		hideAnimation: {
			type: 'slideOut',
			direction: 'right',
		},
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				
				items: [
					{
						xtype: 'searchfield',
						placeHolder: 'Search...',
						itemId: 'searchBox',
						width: window.innerWidth,						
					}
				]
			}
		]  
    }
});