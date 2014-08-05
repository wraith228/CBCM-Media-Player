Ext.define('MyApp.view.ResultsPanel', {
    extend: 'Ext.Panel',
    alias : 'widget.resultsPanel',
	
    config: {
		xtype: 'panel',
		layout: 'vbox',
		style: 'background:#f2f2f2;',
		flex: 1,
		items: [
			//Search title panel
			{
				xtype:'panel',
				height: 30,
				style: 'background:#f2f2f2;',
				id: 'searchLabel'
			},
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
				],
				emptyText: '<div class="Content">No Matching Videos</div>',
            }
		]  
    }
});