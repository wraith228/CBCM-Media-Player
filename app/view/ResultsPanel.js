Ext.define('MyApp.view.ResultsPanel', {
    extend: 'Ext.Panel',
    alias : 'widget.resultsPanel',
 
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
						//action: 'callHome',
						align: 'left',
						//bug test
						handler: function() {
							console.log('Home');
							Ext.Viewport.setActiveItem(Ext.widget('mainPanel'));
							var store = Ext.getStore('Videos');
							store.clearFilter();
							MyApp.app.getController('Processes').popularSort();
						}
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
			//filter menu
			{
				xtype: 'panel',				
				baseCls: 'subPanel',
				action: 'callSelect',
				layout: 'hbox',
				items: [
					{
						xtype: 'panel',
						baseCls: 'textPanel',
						html: '<div class="textPanel">Filters<div>',
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
			//Videos store list
			{
                xtype: 'list',
                store : 'Videos',
				action: 'getLink',
				flex: 1,
				baseCls: 'myList',
				//grouped: true,
				itemTpl: [
					'<table>',
						'<tr>',
							'<td style="padding: 10px"><img width="128" height="72" align="center" src="http://www.wnyc.org/i/620/372/l/80/1/blackbox.jpeg" /></td>',
							'<td style="font-family: Segoe UI; font-size: 17px"><h2><b>{name}</b><h2>',
							'Views: {views}</td>',
						'</tr>',
					'</table>',
				],
				emptyText: '<div class="Content">No Matching Videos</div>',
            }
		]  
    }
});