Ext.define('MyApp.view.View', {
extend: 'Ext.viewport.Default',
alias : 'widget.View',
	config: {
		itemId: 'mycontainer',
		items: [
			//menu
			{
				xtype: 'titlebar',
				baseCls: 'titleBar',
				docked: 'top',
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
						action: 'callHome',
						align: 'left'
					},
					{
						xtype: 'button',
						action: 'goBack',
						align: 'left',
						iconCls: 'arrow_left',
						hidden: false
					}
				]
			},
			//search field drop-down
			{
				xtype: 'toolbar',
				baseCls: 'titlebar',
				id: 'searchBar',
				hidden: true,
				docked: 'top',
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
				docked: 'top',
				name:'dropMenu',
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
			{
				xtype: 'mainPanel',
			}
		]
	}		
});