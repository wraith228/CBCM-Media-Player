Ext.Loader.setConfig({
 enabled: true
});
 
Ext.application({
     
 name: 'MyApp',
 appFolder: 'app',
  
 requires: [
               'MyApp.view.MainPanel', 'MyApp.view.SearchPanel', 'MyApp.view.ResultsPanel'
               ],
                
    views : ['MainPanel', 'SearchPanel', 'ResultsPanel'],          
    controllers: ['Search'],
     
    launch: function() {
     console.log('Application launch');
     Ext.create('Ext.Container', {
      fullscreen: true,
      layout: 'vbox',
         items: [{
          flex: 1,
          xtype: 'mainPanel'
            }]
     });
    }
     
});
