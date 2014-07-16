Ext.define('MyApp.view.MainPanel', {
    extend: 'Ext.Panel',
    alias : 'widget.mainPanel',
 
    config: {		
		layout: 'fit',         
		items: [
			//main titlebar code
			{
				xtype: 'titlebar',
				docked: 'top',
				id: 'cbcmTitle',
				//title: 'CBCM Media Player',
				
				items: [
					//menu button
					{
						xtype: 'button',
						iconCls: 'user',
						//align: 'left',
						itemID: 'menuBtn',
						action: 'callMenu'
					},
					{
						xtype: 'spacer',
						width: (window.innerWidth /2) - 134
					},
					{
						xtype: 'button',
						text: 'CBCM Media Player',
						
						itemID: 'homeBtn',
						action: 'callHome'
					},
					//search button
					{
						xtype: 'button',
						iconCls: 'search',
						align: 'right',
						itemId: 'searchBtn',
						action: 'callSearch'
					}
				]
			},
			//Main store select buttons code
			{
				xtype: 'toolbar',
				docked: 'top',
				layout:{
					type: 'hbox',
					pack: 'center'
				},
				defaults: {
					xtype: 'button',
					flex: 1,
				},				
				items: [
					//popular button
					{
						id: 'popularBtn',
						text: 'Popular',
						action: 'callPopular'
					},
					//upload date button
					{
						id: 'dateBtn',
						text: 'Upload Date',
						action: 'callAdded'
					},
					//categories button
					{
						id: 'liveBtn',
						text: 'Livestreams',
						action: 'callLive'
					}
				]				
			},
			//Videos store list code
			{
                xtype: 'list',
                store : 'Videos',
				action: 'getLink',
				itemTpl: [
					'<table>',
						'<tr>',
							'<td><img width="128" height="72" src="http://www.wnyc.org/i/620/372/l/80/1/blackbox.jpeg" /></td>',
							'<td style="padding: 10px"><h2><b>{name}</b><h2>',
							'Views: {views}</td>',
						'</tr>',
					'</table>',
				],
				emptyText: '<div class="Content">No Matching Videos</div>',
            },
		]  
    }
});