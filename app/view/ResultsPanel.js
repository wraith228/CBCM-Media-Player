Ext.define('MyApp.view.ResultsPanel', {
    extend: 'Ext.Panel',
    alias : 'widget.resultsPanel',
	
    config: {
		xtype: 'panel',
		layout: 'vbox',
		style: 'background:#f2f2f2;',
		flex: 1,
		items: [
			//filter menu
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
				xtype:'panel',
				height: 30,
				style: 'background:#f2f2f2;',
				id: 'searchLabel'
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
				],
				emptyText: '<div class="Content">No Matching Videos</div>',
            }
		]  
    }
});