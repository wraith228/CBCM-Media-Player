Ext.define('MyApp.model.Video', {
    extend: 'Ext.data.Model',
	
    config: {
		idProperty: 'video',
		fields: [
            {name: 'name', type: 'string'},
			{name: 'postDate', type: 'date', format:'MM-DD-YYYY'},
			{name: 'views', type: 'int'},
			{name: 'cong', type: 'string'},
			{name: 'topic', type: 'string'},
			{name: 'speaker', type: 'string'},
			{name: 'topic', type: 'string'},
			{name: 'vidThumb', type: 'image/png'},
        ]
    }
});