Ext.define('MyApp.store.SearchRecords', {
    extend: 'Ext.data.Store',
     
    requires: ['MyApp.model.SearchModel'],
	autoLoad: true,

    config: {
		model: 'MyApp.model.SearchModel',

		proxy: {
			type: 'localstorage',
			reader: {
				type: 'array'
			}
		}
	}
});