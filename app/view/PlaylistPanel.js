Ext.define('MyApp.view.PlaylistPanel', {
    extend: 'Ext.Panel',
    alias : 'widget.playlistPanel',
 
    config: {
		xtype: 'panel',
		layout: 'vbox',
		style: 'background:#f2f2f2;',
		flex: 1,
		items: [
			//Playlist store list
			{
				xtype: 'list',
				store : 'Playlist',
				flex: 1,
				baseCls: 'myList',
				stripeRows: true,
				action: 'tapPlay',
				itemTpl: [
					'<table>',
						'<tr>',
							'<td style="padding: 13px"><img width="128" height="72" align="center" src="http://www.wnyc.org/i/620/372/l/80/1/blackbox.jpeg" /></td>',
							'<td class="fontStyle3"><h2><b>{name}</b><h2>',
							'Views: {views}</td>',
						'</tr>',
					'</table>',					
				],
				emptyText: '<div class="Content">Your playlist is empty</div>',
			},
		]
    }
});