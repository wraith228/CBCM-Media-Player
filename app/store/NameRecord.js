Ext.define('MyApp.store.NameRecord', {
    extend: 'Ext.data.Store',
     
    requires: ['MyApp.model.Video'],
	autoLoad: true,

    config: {
		model: 'MyApp.model.Video',

		proxy: {
			type: 'localstorage',
			reader: {
				type: 'array'
			}
		}
	}
});