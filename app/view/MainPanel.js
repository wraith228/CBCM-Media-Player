Ext.define('MyApp.view.MainPanel', {
    extend: 'Ext.Panel',
    alias : 'widget.mainPanel',
 
    config: {
		xtype: 'panel',
		layout: 'vbox',         
		items: [
			//menu code
			{
				xtype: 'titlebar',
				baseCls: 'titleBar',
				docked: 'top',
				id: 'cbcmTitle',
				height: 50,
				
				items: [
					//menu button
					{
						xtype: 'button',
						baseCls: 'moreBtn',
						itemID: 'menuBtn',
						action: 'callMenu',
						align: 'left',

					},
											
					//search button
					{

						xtype: 'button',
						baseCls: 'searchBtn',
						itemId: 'searchBtn',
						action: 'callSearch',
						align: 'right'
					},
					//home button
					{
						xtype: 'button',
						baseCls: 'homeBtn',
						itemId: 'homeBtn',
						action: 'closeMenu',
						align: 'left'
					},
				]
			},
			{
				xtype: 'panel',
				id: 'dropMenu',
				hidden: true,
				items: [
					
					{
						xtype: 'toolbar',
						baseCls: 'titleBar',
						items: [
							{
							 xtype: 'button',
							 baseCls: 'liveBtn',
							 width: window.innerWidth
							}
						]
					},
					{
						xtype: 'toolbar',
						baseCls: 'titleBar',
						items: [
							{
							 xtype: 'button',
							 baseCls: 'favoritesBtn',
							 width: window.innerWidth
							}
						]
					},
					{
						xtype: 'toolbar',
						baseCls: 'sepBar'
					},
					{
						xtype: 'toolbar',
						baseCls: 'titleBar',
						items: [
							{
							 xtype: 'button',
							 baseCls: 'settingsBtn',
							 width: window.innerWidth,
							 action: 'callSettings'
							}
						]
					},
					{
						xtype: 'toolbar',
						baseCls: 'titleBar',
						items: [
							{
							 xtype: 'button',
							 baseCls: 'helpBtn',
							 width: window.innerWidth,
							 action: 'callHelp'
							}
						]
					}
				]
			},
			{
				xtype: 'toolbar',
				baseClas: 'titlebar',
				id: 'searchBar',
				hidden: true,
				items: [
					{
						xtype: 'spacer',
						width: 10
					},
					{
						xtype: 'searchfield',
						placeHolder: 'Search...',
						itemId: 'searchBox',
						width: window.innerWidth - 20,
					}
				]
			},
			{
				xtype: 'panel',				
				height: 35,
				baseCls: 'popBar'
			},
			//Videos store list code
			{
                xtype: 'list',
                store : 'Videos',
				action: 'getLink',
				flex: 1,
				height: 'auto',
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