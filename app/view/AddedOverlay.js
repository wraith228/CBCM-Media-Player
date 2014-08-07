Ext.define('MyApp.view.AddedOverlay', {
	extend: 'Ext.form.Panel',
	alias: 'widget.addedPanel',
	config: {	
		xtype: 'panel',
		layout: 'hbox',
		id: 'addedOverlay',
		centered: true,
		frame: true,
		baseCls: 'panelRounded',
		//floating: true,
		width: window.innerWidth/2,
		height: 60,
		flex: 1,
		hideOnMaskTap: true,
		modal: true,
		html: 'Added to playlist'

	},
});