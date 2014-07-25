Ext.define('MyApp.store.Videos', {
    extend: 'Ext.data.Store',
     
    requires: ['MyApp.model.Video'],
	autoLoad: true,

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Videos',
            model: 'MyApp.model.Video',
			/*
			grouper: {
				groupFn: function(searchGlobal) {
					var convert= JSON.parse(searchGlobal);
					return convert;
				}
			},
			*/
            data: [
                [
                    'Video01',
					'Fri Jun 12 2013 08:56:18 +0000',
					'5',
					'cong1',
					'topic3',
					'speaker2',
                ],
                [
                    'Video02',
					'Wed Jan 01 2014 05:42:22 +0000',
					'15',
					'cong2',
					'topic3',
					'speaker1',
                ],
                [
                    'Video03',
					'Fri Jan 31 2013 12:31:08 +0000',
					'55',
					'cong3',
					'topic2',
					'speaker2',
                ],
                [
                    'Video04',
					'Wed Feb 05 2014 07:18:15 +0000',
					'35',
					'cong1',
					'topic3',
					'speaker3',
                ],
                [
                    'Video05',
					'Fri Feb 28 2013 18:19:15 +0000',
					'45',
					'cong2',
					'topic2',
					'speaker1',
                ],
                [
                    'Video06',
					'Sun Mar 09 2014 16:18:10 +0000',
					'95',
					'cong3',
					'topic1',
					'speaker3',
                ],
                [
                    'Video07',
					'Sun Mar 23 2013 05:20:11 +0000',
					'75',
					'cong1',
					'topic2',
					'speaker2',
                ],
                [
                    'Video08',
					'Sat Apr 05 2014 07:21:13 +0000',
					'15',
					'cong2',
					'topic1',
					'speaker1',
                ],
                [
                    'Video09',
					'Mon May 26 2014 03:22:14 +0000',
					'95',
					'cong3',
					'topic3',
					'speaker3',
                ],
                [
                    'Video10',
					'Tue Jun 17 2014 04:25:28 +0000',
					'5',
					'cong1',
					'topic2',
					'speaker1',
                ]
            ],
            proxy: {
                type: 'memory',
                reader: {
                    type: 'array'
                }
            },
			sorters: [{
				sorterFn: function(video1, video2) {
				
					var sDate1 = video1.get('postDate'),
					v1 = video1.get('views'),
					eDate = new Date(),
					t1 = ((eDate.getTime() - sDate1.getTime()) / 3600000),
					pop1 = ((v1+1)/((t1+2)^1.5)),
					sDate2 = video2.get('postDate'),
					v2 = video2.get('views'),
					t2 = ((eDate.getTime() - sDate2.getTime()) / 3600000),
					pop2 = ((v2+1)/((t2+2)^1.5));
				
				return pop1 < pop2 ? 1 : (pop1 > pop2 ? -1 : 0);
				}
			}]	
        }, cfg)]);
	}
});
/*
Ext.define('MyApp.store.Videos', {
    extend: 'Ext.data.Store',
     
    config: {
     model: 'MyApp.model.Video',
     autoLoad: true,
      
     proxy: {
         type: 'ajax',
         url: 'VideoServlet',
         reader: {
             type: 'json',
             totalProperty: 'totalCount',
             rootProperty: 'videos',
             successProperty: 'success'
         },
   }
    }
});
*/