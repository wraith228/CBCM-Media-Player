Ext.define('MyApp.view.View', {
extend: 'Ext.viewport.Default',
alias : 'widget.View',
	config: {
		itemId: 'mycontainer',
		items: [
			//menu icons
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
			//title panel
			{
				xtype: 'panel',				
				baseCls: 'subPanel',
				docked: 'top',
				id: 'titlePanel',
				hidden: true,
				layout: 'hbox',
				items: [
					{
						xtype: 'spacer',
						width: 13,
					},
					{
						xtype: 'panel',
						baseCls: 'textPanel',
						id: 'titleBox',
						flex: 1
					},
					{
						xtype: 'spacer',
						width: 9,
					}
				]
			},
			//category menu
			{
				xtype: 'panel',
				id: 'catMenu',
				docked: 'top',
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
				docked: 'top',
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
			//filter menu
			{
				xtype: 'panel',	
				id: 'filters',
				hidden: true,
				docked: 'top',
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
						html: '<div class="textPanel">Filters<div>',
						flex: 1
					},
					{
						xtype: 'panel',
						baseCls: 'arrowBtn',
						id: 'filterBtn',
					}
				],
				listeners: {
					initialize: function() {
						this.element.on({
							tap: function() {
								var select = Ext.getCmp('selectDrop');
								var button = Ext.getCmp('filterBtn');
								if (select.isHidden()) {
									select.show();
									button.setCls('arrowDownBtn');
								}	
								else {
									select.hide();
									button.setCls('arrowBtn');
								}
							}
						})
					}
				}
			},
			//filter drop-down
			{
				xtype: 'panel',
				hidden: true,
				docked: 'top',
				id: 'selectDrop',
				items: [
					{
						xtype: 'toolbar',
						height: 35,
						style: 'background:#313131;',
						items: [
							{
								xtype: 'selectfield',
								baseCls: 'selectText',
								inputCls: 'selectCustom',
								autoSelect: false,
								flex: 1,
								id: 'sortDate',
								name: 'sortDates',
								valueField: 'value',
								placeHolder: 'Date',
								required: true,
								options: [
									{text: 'Newest', value: 'newest'},
									{text: 'Oldest', value: 'oldest'},
								],
								listeners: {
									change: {
										click: 'el',
										fn: function(field, value) {
											var store = Ext.getStore('Videos');
					
											if(value == 'newest'){
												store.sort('postDate', 'DESC');
											}
											else if(value == 'oldest'){
												store.sort('postDate', 'ASC');
											}
										}
									}
								}
							}
						]
					},
					{
						xtype: 'toolbar',
						baseCls: 'sepBar'
					},
					{
						xtype: 'toolbar',
						height: 35,
						style: 'background:#313131;',
						items: [
							{
								xtype: 'selectfield',
								baseCls: 'selectText',
								inputCls: 'selectCustom',
								autoSelect: false,
								flex: 1,
								id: 'sortCongregation',
								valueField: 'value',
								placeHolder: 'Congregation',
								required: true,
								options: [
									{text: '',  value: null},
									{text: 'cong1',  value: 'cong1'},
									{text: 'cong2', value: 'cong2'},
									{text: 'cong3', value: 'cong3'},
								],
								
								listeners: {
									change: {
										click: 'el',
										fn: function(field, value) {
											congFilt = value;
											var store = Ext.getStore('Videos');
											store.clearFilter();
											
											var thisRegEx = new RegExp(searchGlobal, "i");
											store.filterBy(function(record) {
												if (thisRegEx.test(record.get('name')) ||
												  thisRegEx.test(record.get('postDate')) ||
												  thisRegEx.test(record.get('cong')) ||
												  thisRegEx.test(record.get('speaker')) ||
												  thisRegEx.test(record.get('topic'))) {
													return true;
												};
												return false;
											});
											
											if (congFilt != null) {
												store.filter('cong', congFilt);
											};
											if (speakFilt != null) {
												store.filter('speaker', speakFilt);
											};
											if (topicFilt != null) {
												store.filter('topic', topicFilt);
											};
										}
									}
								}
							}
						]
					},
					{
						xtype: 'toolbar',
						baseCls: 'sepBar'
					},
					{
						xtype: 'toolbar',
						height: 35,
						style: 'background:#313131;',
						items: [
							{
								xtype: 'selectfield',
								baseCls: 'selectText',
								inputCls: 'selectCustom',
								autoSelect: false,
								flex: 1,
								id: 'sortTopic',
								valueField: 'value',
								placeHolder: 'Topic',
								required: true,
								options: [
									{text: '',  value: null},
									{text: 'topic1',  value: 'topic1'},
									{text: 'topic2', value: 'topic2'},
									{text: 'topic3', value: 'topic3'},
								],
								
								listeners: {
									change: {
										click: 'el',
										fn: function(field, value) {
											topicFilt = value;
											var store = Ext.getStore('Videos');
											store.clearFilter();
											
											var thisRegEx = new RegExp(searchGlobal, "i");
											store.filterBy(function(record) {
												if (thisRegEx.test(record.get('name')) ||
												  thisRegEx.test(record.get('postDate')) ||
												  thisRegEx.test(record.get('cong')) ||
												  thisRegEx.test(record.get('speaker')) ||
												  thisRegEx.test(record.get('topic'))) {
													return true;
												};
												return false;
											});
											
											if (congFilt != null) {
												store.filter('cong', congFilt);
											};
											if (speakFilt != null) {
												store.filter('speaker', speakFilt);
											};
											if (topicFilt != null) {
												store.filter('topic', topicFilt);
											};
										}
									}
								}
							}
						]
					},
					{
						xtype: 'toolbar',
						baseCls: 'sepBar'
					},
					{
						xtype: 'toolbar',
						height: 35,
						style: 'background:#313131;',
						items: [
							{
								xtype: 'selectfield',
								baseCls: 'selectText',
								inputCls: 'selectCustom',
								autoSelect: false,
								flex: 1,
								id: 'sortSpeaker',
								valueField: 'value',
								placeHolder: 'Speaker',
								required: true,
								options: [
									{text: '',  value: null},
									{text: 'speaker1',  value: 'speaker1'},
									{text: 'speaker2', value: 'speaker2'},
									{text: 'speaker3', value: 'speaker3'},
								],
								
								listeners: {
									change: {
										click: 'el',
										fn: function(field, value) {
											speakFilt = value;
											var store = Ext.getStore('Videos');
											store.clearFilter();
											
											var thisRegEx = new RegExp(searchGlobal, "i");
											store.filterBy(function(record) {
												if (thisRegEx.test(record.get('name')) ||
												  thisRegEx.test(record.get('postDate')) ||
												  thisRegEx.test(record.get('cong')) ||
												  thisRegEx.test(record.get('speaker')) ||
												  thisRegEx.test(record.get('topic'))) {
													return true;
												};
												return false;
											});
											
											if (congFilt != null) {
												store.filter('cong', congFilt);
											};
											if (speakFilt != null) {
												store.filter('speaker', speakFilt);
											};
											if (topicFilt != null) {
												store.filter('topic', topicFilt);
											};
										}
									}
								}
							}
						]
					}
				]		
			},
			{
				xtype: 'panel',
				id: 'noticeBar',
				layout: 'hbox',
				docked: 'top',			
				html: '<div class="textPanel2">Added to playlist<div>',
				hidden: true,
			},
			//video player
			{
				xtype: 'panel',
				docked: 'top',
				id: 'vidDrop',
				hidden: true,
				height: window.innerHeight/2.5,
				items: [{
					xtype: 'video',
					id: 'vidPlayer',
					
					autoPause: true,
					autoResume: true,
					enableControls: true,
					preload: true,
					
					layout: {
						type: 'vbox',
						fullscreen: true,
					},
					/*
					if (!this.getEnableControls() || Ext.os.is.Android) {
						this.add({
							xtype: 'button',
							text: 'Play Video',
							handler: function(b,e) {
								var video = this.getParent().down('video');
								if (video.isPlaying()) {
									video.pause();
									b.setText('Play Video');
								} else {
									video.play();
									b.setText('Pause Video');
								}
							}
						})
					}
					*/
				}],
				listeners: {
					show: function() {
					console.log('test');
						var vidPlayer = Ext.getCmp('vidPlayer');
						var vidUrl = listGlobal.get('vidUrl')
						vidPlayer.setUrl(vidUrl);
						vidPlayer.setPosterUrl('https://didattica.polito.it/zxd/cms_data/image/16/play-button.png');
					}
				}					
			},
			{
				xtype: 'mainPanel',
			}
		]
	}		
});