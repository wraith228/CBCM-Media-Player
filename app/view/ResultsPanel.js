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
				title: 'CBCM Media Player',
				items: [
					//home button
					{
						xtype: 'button',
						iconCls: 'home',
						align: 'left',
						itemID: 'homeBtn',
						action: 'callHome',
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
					
					action: 'getSelect',
				},
				items: [
					{
						id: 'sortDate',
						valueField: 'value',
						placeHolder: 'Date',
						required: true,
						options: [
							{text: 'Newest',  value: 'newest'},
							{text: 'Oldest', value: 'oldest'},
						]
					},
					{
						id: 'sortCongregation',
						valueField: 'value',
						placeHolder: 'Congregation',
						required: true,
						options: [
							{text: 'First',  value: 'first'},
							{text: 'Second', value: 'second'},
							{text: 'Third', value: 'third'},
						]
					},
					{
						id: 'sortTopic',
						valueField: 'value',
						placeHolder: 'Topic',
						required: true,
						options: [
							{text: 'First',  value: 'first'},
							{text: 'Second', value: 'second'},
							{text: 'Third', value: 'third'},
						]
					},
					{
						id: 'sortSpeaker',
						valueField: 'value',
						placeHolder: 'Speaker',
						required: true,
						options: [
							{text: 'First',  value: 'first'},
							{text: 'Second', value: 'second'},
							{text: 'Third', value: 'third'},
						]
					},
				]
			},
				
			//Videos store list code
			{
                xtype: 'list',
                store : 'Videos',
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