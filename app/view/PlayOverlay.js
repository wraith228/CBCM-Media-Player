Ext.define('MyApp.view.PlayOverlay', {
	extend: 'Ext.form.Panel',
	alias: 'widget.playPanel',
	config: {	
		xtype: 'toolbar',
		layout: 'hbox',
		id: 'playOverlay',
		centered: true,
		//floating: true,
		width: window.innerWidth,
		//height: 90,
		flex: 1,
		hideOnMaskTap: true,
		modal: true,
		items: [
			{
				xtype: 'button',
				baseCls: 'textBtn',
				html: '<div class="subTxt2">Play</div>',
				docked: 'top',
				flex: 1,
				action: 'vidPlay',
			},
			{
				xtype: 'button',
				baseCls: 'textBtn',
				html: '<div class="subTxt2">Delete</div>',
				docked: 'top',
				flex: 1,
				action: 'deleteVid',
			}
		]

	},
});