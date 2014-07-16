Ext.define('MyApp.view.ResultsPanel', {
    extend: 'Ext.Panel',
    alias : 'widget.resultsPanel',
 
    config: {		
		layout: 'fit',         
		items: [
			//titlebar code
			{
				xtype: 'titlebar',
				docked: 'top',
				id: 'cbcmTitle',
				//title: 'CBCM Media Player',
				
				items: [
					//menu button
					{
						xtype: 'button',
						iconCls: 'user',
						//align: 'left',
						itemID: 'menuBtn',
						action: 'callMenu'
					},
					{
						xtype: 'spacer',
						width: (window.innerWidth /2) - 134
					},
					{
						xtype: 'button',
						text: 'CBCM Media Player',
						
						itemID: 'homeBtn',
						action: 'callHome'
					},
					//search button
					{
						xtype: 'button',
						iconCls: 'search',
						align: 'right',
						itemId: 'searchBtn',
						action: 'callSearch'
					}
				]
			},
			{
				xtype: 'toolbar',
				docked: 'top',
				layout:{
					type: 'hbox',
					pack: 'center'
				},
				defaults: {
					xtype: 'selectfield',
					autoSelect: false,
					flex: 1,
				},
				items: [
					//date sort
					{
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
					},
					//congregation filter
					{
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
						
					},
					//topic filter
					{
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
						
					},
					//speaker filter
					{
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
						
					},
					
				],
				
			},
				
			//Videos store list code
			{
                xtype: 'list',
                store : 'Videos',
				action: 'getLink',
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