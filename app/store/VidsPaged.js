Ext.define('MyApp.store.VidsPaged', {
    extend: 'Ext.data.Store',
     
    requires: [
        'MyApp.model.Video'
    ],
	autoLoad: true,
	proxy: {
		type: ‘memory’,
		reader: {
			type: ‘json’
		}
	},
	listeners: {
		beforeload: function(store, operation, options) {
			var vidStore = Ext.getStore(‘Videos’);
			vidStore.load(function(records, operation, success) {
				if (success) {
					store.loadData(records[10].data.Video);
				}
			});
		}
	},
	pageSize: 10,
});