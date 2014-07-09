//search bar overlay view
Ext.define('MyApp.view.SearchPanel', {
    extend: 'Ext.form.Panel',
    alias : 'widget.searchPanel',
 
    config: {		
		layout: 'fit',
		modal: true,
		hideOnMaskTap: true,
		top: 0,	
		
		showAnimation: {
			type: 'slideIn',
			direction: 'down'
		},
		hideAnimation: {
			type: 'slideOut',
			direction: 'up',
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
						width: window.innerWidth - 10					
					}
				]
			}
		]  
    }
});