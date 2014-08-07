Ext.define('MyApp.view.MainPanel', {
    extend: 'Ext.navigation.View',
    alias : 'widget.mainPanel',
 
    config: {
		id: 'main',
		itemId: 'homePanel',
		navigationBar: {
			hidden: true
		},
		items: [
			{
				xtype: 'panel',
				layout: 'vbox',
				style: 'background:#f2f2f2;',
				flex: 1,		
				items: [	
					//Videos store list
					{
						xtype: 'list',
						store : 'Videos',
						flex: 1,
						baseCls: 'myList',
						stripeRows: true,
						action: 'tapVid',
						itemTpl: [
							'<table>',
								'<tr>',
									'<td style="padding: 13px"><img width="128" height="72" align="center" src="http://www.wnyc.org/i/620/372/l/80/1/blackbox.jpeg" /></td>',
									'<td class="fontStyle3"><h2><b>{name}</b><h2>',
									'Views: {views}</td>',
								'</tr>',
							'</table>',
						]
					},
				]
			}
		]
    }
});