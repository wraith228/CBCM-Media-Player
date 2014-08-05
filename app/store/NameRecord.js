Ext.define('MyApp.store.NameRecord', {
    extend: 'Ext.data.Store',
     
    requires: ['MyApp.model.NameModel'],
	autoLoad: true,

    config: {
		model: 'MyApp.model.NameModel',

		proxy: {
			type: 'localstorage',
			reader: {
				type: 'array'
			}
		}
	}
});