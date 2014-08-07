Ext.define('MyApp.view.LivePanel', {
    extend: 'Ext.Panel',
    alias : 'widget.livePanel',
 
    config: {
		xtype: 'panel',
		layout: 'vbox',
		style: 'background:#f2f2f2;',
		flex: 1,
		items: [
			{
				xtype: 'panel',
				id: 'live1',
				style: 'background:#e2e2e2;',
				height: 92,
				baseCls: 'fontStyle',
				html: '<table><tr><td style="padding: 13px"><img width="128" height="72" align="center" src="http://www.wnyc.org/i/620/372/l/80/1/blackbox.jpeg" /></td><td><h2><b>Sanctuary</b><h2></td></tr></table>',
				/*
				listeners: {
					initialize: function() {
						this.element.on({
							tap: function() {
								var live1 = Ext.getCmp('live1');
								var live2 = Ext.getCmp('live2');
								live1.setStyle('background:#2b5b8e;');
								live2.setStyle('background:#f2f2f2;');
								live1.setCls('fontStyle2');
								live2.setCls('fontStyle');
							}
						})
					}
				}
				*/
			},
			{
				xtype: 'panel',
				id: 'live2',
				style: 'background:#f2f2f2;',
				height: 92,
				baseCls: 'fontStyle',
				html: '<table><tr><td style="padding: 13px"><img width="128" height="72" align="center" src="http://www.wnyc.org/i/620/372/l/80/1/blackbox.jpeg" /></td><td><h2><b>Fellowship Hall</b><h2></td></tr></table>',
				/*
				listeners: {
					initialize: function() {
						this.element.on({
							tap: function() {
								var live1 = Ext.getCmp('live1');
								var live2 = Ext.getCmp('live2');
								live2.setStyle('background:#2b5b8e;');
								live1.setStyle('background:#e2e2e2;');
								live1.setCls('fontStyle');
								live2.setCls('fontStyle2');

							}
						})
					}
				}
				*/
			}
		]
    }
});