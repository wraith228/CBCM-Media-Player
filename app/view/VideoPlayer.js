    Ext.define('MyApp.view.VideoPlayer', {
		extend: 'Ext.form.Panel',
		alias: 'widget.videoPanel',
		config: {		
			xtype: 'panel',
			layout: 'vbox',
			style: 'background:#f2f2f2;',
			
			flex: 1,
			items: [
				/*
				{
					xtype:'panel',
					height: 30,
					style: 'background:#f2f2f2;',
					id: 'noticeBar',
				},
				*/
				{
					xtype:'panel',
					layout: 'hbox',
					style: 'background:#f2f2f2;',
					//Video player layout code goes here
					items: [
						{
							xtype: 'button',
							action: 'addPlaylist',
							iconCls: 'add',
							tooltip: 'Add to playlist'
						},
					]
				},
				{
					xtype: 'panel',
					flex: 1
				}
			]			
		}
		
    }); 