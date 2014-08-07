Ext.define('MyApp.model.SearchModel', {
    extend: 'Ext.data.Model',
	
    config: {
		fields: [
            {name: 'query', type: 'string'}
        ]
    }
});