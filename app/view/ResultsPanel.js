Ext.define('MyApp.view.ResultsPanel', {
    extend: 'Ext.Panel',
    alias : 'widget.resultsPanel',
 
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
			//menu dropdown code
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
				style: 'background:#2b5b8e;',
				action: 'callSelect',
				layout: 'hbox',
				items: [
					{
						xtype: 'panel',
						baseCls: 'filterPanel',
						align: 'left',
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
						id: 'filterBtn',
						align: 'right',
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
						height: 35,
						style: 'background:#313131;',
						items: [
							{
								xtype: 'selectfield',
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
						height: 35,
						style: 'background:#313131;',
						items: [
							{
								xtype: 'selectfield',
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
						height: 35,
						style: 'background:#313131;',
						items: [
							{
								xtype: 'selectfield',
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
			
				
			//Videos store list code
			{
                xtype: 'list',
                store : 'Videos',
				action: 'getLink',
				flex: 1,
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
            }
		]  
    }
});