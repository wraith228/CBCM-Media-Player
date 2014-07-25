Ext.define('MyApp.view.MainPanel', {
    extend: 'Ext.Panel',
    alias : 'widget.mainPanel',
 
    config: {
		xtype: 'panel',
		layout: 'vbox',
		style: 'background:#f2f2f2;',
		flex: 1,		
		items: [
			//menu
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
							 html: '<div class="menuFont">Livestreams<div>',
							 action: 'callLive',
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
							 html: '<div class="menuFont">Playlist<div>',
							 action: 'callFav',
							 flex: 1
							}
						]
					},
					//seperator
					{
						xtype: 'toolbar',
						layout: 'hbox',
						baseCls: 'sepContainer',
						items: [
							{
								xtype: 'spacer',
								width: 13
							},
							{
								xtype: 'toolbar',
								baseCls: 'sepBar',
								flex: 1
							},
							{
								xtype: 'spacer',
								width: 13
							}
						]
					},
					//settings button
					{
						xtype: 'toolbar',
						baseCls: 'titleBar',
						items: [
							{
							 xtype: 'button',
							 baseCls: 'settingsBtn',
							 html: '<div class="menuFont">Settings<div>',
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
							 html: '<div class="menuFont">Help<div>',
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
				baseCls: 'subPanel',
				action: 'callSelect',
				layout: 'hbox',
				items: [
					{
						xtype: 'panel',
						baseCls: 'textPanel',
						html: '<div class="textPanel">Popular</div>',
						id: 'catPanel',					
					},
					{
						xtype: 'panel',
						baseCls: 'arrowBtn',
						id: 'catBtn',
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
			//category drop-down
			{
				xtype: 'panel',
				hidden: true,
				id: 'categoryDrop',
				items: [
					{
						xtype: 'toolbar',
						style: 'background:#313131;',
						items: [
							{
								xtype: 'button',
								baseCls: 'textBtn',
								html: '<div class="subTxt">Popular</div>',
								flex: 1,
								action: 'callPopular',
							},
						]
					},
					//seperator
					{
						xtype: 'toolbar',
						layout: 'hbox',
						baseCls: 'sepContainer2',
						items: [
							{
								xtype: 'spacer',
								width: 13
							},
							{
								xtype: 'toolbar',
								baseCls: 'sepBar2',
								flex: 1
							},
							{
								xtype: 'spacer',
								width: 13
							}
						]
					},
					{
						xtype: 'toolbar',
						style: 'background:#313131;',
						items: [
							{
								xtype: 'button',
								baseCls: 'textBtn',
								html: '<div class="subTxt">Recent</div>',
								flex: 1,
								action: 'callAdded',
							},
						]
					},
				]
			},		
			//Videos store list
			{
                xtype: 'list',
                store : 'Videos',
				flex: 1,
				baseCls: 'myList',
				stripeRows: true,
				itemTpl: [
					'<table>',
						'<tr>',
							'<td style="padding: 10px"><img width="128" height="72" align="center" src="http://www.wnyc.org/i/620/372/l/80/1/blackbox.jpeg" /></td>',
							'<td class="fontStyle"><h2><b>{name}</b><h2>',
							'Views: {views}</td>',
						'</tr>',
					'</table>',
				]
            },
		] 
    }
});