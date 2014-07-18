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
						align: 'left'
					},
				]
			},
			//search field drop-down
			{
				xtype: 'toolbar',
				baseCls: 'titlebar',
				id: 'searchBar',
				hidden: true,
				layout: 'hbox',
				style: 'background:#313131;',
				items: [
					{
						xtype: 'spacer',
						width: 10
					},
					{
						xtype: 'searchfield',
						placeHolder: 'Search...',
						//itemId: 'searchBox',
						flex: 1,
						listeners : {
							action: function() {
								this.fireEvent('newSearch', this);
							}
                        }
					},
					{
						xtype: 'spacer',
						width: 10
					},
				]
			},
			//menu drop-down
			{
				xtype: 'panel',
				id: 'dropMenu',
				hidden: true,
				items: [
					//livestream button
					{
						xtype: 'toolbar',
						baseCls: 'titleBar',
						items: [
							{
							 xtype: 'button',
							 baseCls: 'liveBtn',
							 flex: 1
							}
						]
					},
					//playlist button
					{
						xtype: 'toolbar',
						baseCls: 'titleBar',
						items: [
							{
							 xtype: 'button',
							 baseCls: 'favoritesBtn',
							 flex: 1
							}
						]
					},
					{
						xtype: 'toolbar',
						baseCls: 'sepBar'
					},
					//settings button
					{
						xtype: 'toolbar',
						baseCls: 'titleBar',
						items: [
							{
							 xtype: 'button',
							 baseCls: 'settingsBtn',
							 action: 'callSettings',
							 flex: 1
							}
						]
					},
					//help button
					{
						xtype: 'toolbar',
						baseCls: 'titleBar',
						items: [
							{
							 xtype: 'button',
							 baseCls: 'helpBtn',
							 action: 'callHelp',
							 flex: 1
							}
						]
					}
				]
			},
			//category menu
			{
				xtype: 'panel',				
				height: 35,
				style: 'background:#2b5b8e;',
				action: 'callSelect',
				layout: 'hbox',
				items: [
					{
						xtype: 'panel',
						baseCls: 'popularPanel',
						align: 'left',
						id: 'catPanel',
						height: 35
					},
					{
						xtype: 'panel',
						flex: 1,
						style: 'background:#2b5b8e;',
					},
					{
						xtype: 'panel',
						baseCls: 'arrowBtn',
						id: 'catBtn',
						align: 'right',
					}
				],
				listeners: {
					initialize: function() {
						this.element.on({
							tap: function() {
								var category = Ext.getCmp('categoryDrop');
								var button = Ext.getCmp('catBtn');
								if (category.isHidden()) {
									category.show();
									button.setCls('arrowDownBtn');
								}	
								else {
									category.hide();
									button.setCls('arrowBtn');
								}
							}
						})
					}
				}
			},
			{
				xtype: 'panel',
				hidden: true,
				id: 'categoryDrop',
				items: [
					{
						xtype: 'toolbar',
						height: 35,
						style: 'background:#313131;',
						items: [
							{
								xtype: 'button',
								baseCls: 'popBtn',
								flex: 1,
								action: 'callPopular',
							},
						]
					},
					{
						xtype: 'toolbar',
						height: 35,
						style: 'background:#313131;',
						items: [
							{
								xtype: 'button',
								baseCls: 'recentBtn',
								flex: 1,
								action: 'callAdded',
							},
						]
					},
				]
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