Ext.Loader.setConfig({
 enabled: true
});
 
Ext.application({
     
 name: 'MyApp',
 appFolder: 'app',
 searchGlobal: 'string',
 congFilt: 'string',
 topicFilt: 'string',
 speakFilt: 'string',
 
 requires: [
               'MyApp.view.MainPanel', 'MyApp.view.SearchPanel', 'MyApp.view.ResultsPanel', 
			   'MyApp.view.VideoPlayer', 'MyApp.view.SettingsPanel', 'MyApp.view.MenuPanel',
			   'MyApp.view.HelpPanel',
               ],
                
    views : ['MainPanel', 'SearchPanel', 'ResultsPanel', 'VideoPlayer', 'SettingsPanel', 'MenuPanel','HelpPanel',],          
    controllers: ['Search', 'Menu'],
     
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
