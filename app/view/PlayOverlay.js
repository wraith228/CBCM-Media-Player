Ext.define('MyApp.view.PlayOverlay', {
		extend: 'Ext.form.Panel',
		alias: 'widget.playOverlay',
		config: {
			xtype: 'panel',
			top: 0,
			height: 90,
			flex: 1,
			hideOnMaskTap: true,
			modal: true,
			items: [
				{
					xtype: 'button',
				}
			]
		}
});