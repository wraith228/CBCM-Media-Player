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
					//category menu
					{
						xtype: 'panel',				
						baseCls: 'subPanel',
						action: 'callSelect',
						layout: 'hbox',
						items: [
							{
								xtype: 'spacer',
								width: 12,
							},
							{
								xtype: 'panel',
								baseCls: 'textPanel',
								html: '<div class="textPanel">Popular</div>',
								id: 'catPanel',
								flex: 1
							},
							{
								xtype: 'panel',
								baseCls: 'arrowBtn',
								id: 'catBtn',
							},				
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