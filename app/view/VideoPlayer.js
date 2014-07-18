    Ext.define('MyApp.view.VideoPlayer', {
		extend: 'Ext.form.Panel',
		alias: 'widget.videoPanel',
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
							action: 'callHome',
							align: 'left'
						},
					]
				},
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
						itemId: 'searchBox',
						flex: 1
					},
					{
						xtype: 'spacer',
						width: 10
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
								 flex: 1
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
								 action: 'callHelp',
								 flex: 1
								}
							]
						}
					]
				},
				{
					xtype: 'panel',				
					height: 35,
					baseCls: 'popBar'
				},
				{
					xtype:'panel'
					//Video player layout code goes here
				}
			]			
		}
    }); 