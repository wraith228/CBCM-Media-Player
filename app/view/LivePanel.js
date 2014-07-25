Ext.define('MyApp.view.LivePanel', {
    extend: 'Ext.Panel',
    alias : 'widget.livePanel',
 
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
						itemId: 'homeBtn',
						action: 'callHome',
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
				docked: 'top',
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
				docked: 'top',
				hidden: true,
				items: [
					
					{
						xtype: 'toolbar',
						baseCls: 'titleBar',
						items: [
							{
							 xtype: 'button',
							 baseCls: 'liveBtnUsed',
							 html: '<div class="menuFont">Livestreams<div>',
							 flex: 1
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
			{
				xtype: 'panel',				
				baseCls: 'subPanel',
				docked: 'top',
				layout: 'hbox',
				items: [
					{
						xtype: 'panel',
						baseCls: 'textPanel',
						html: '<div class="textPanel">Livestreams<div>',
						align: 'left',
					}
				]
			},
			/*
			{
				xtype: 'toolbar',
				docked: 'top',
				title: 'Settings',
				items: [
					{
						xtype: 'button',
						iconCls: 'arrow_left',
						action: 'goBack',
						align: 'left'

					}
				]
			},
			*/
			{
				xtype: 'panel',
				id: 'live1',
				style: 'background:#e2e2e2;',
				height: 92,
				baseCls: 'fontStyle',
				html: '<table><tr><td style="padding: 10px"><img width="128" height="72" align="center" src="http://www.wnyc.org/i/620/372/l/80/1/blackbox.jpeg" /></td><td><h2><b>Sanctuary</b><h2></td></tr></table>',
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
			},
			{
				xtype: 'panel',
				id: 'live2',
				style: 'background:#f2f2f2;',
				height: 92,
				baseCls: 'fontStyle',
				html: '<table><tr><td style="padding: 10px"><img width="128" height="72" align="center" src="http://www.wnyc.org/i/620/372/l/80/1/blackbox.jpeg" /></td><td><h2><b>Fellowship Hall</b><h2></td></tr></table>',
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
			}
		]
    }
});