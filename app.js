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
               'MyApp.view.MainPanel', 'MyApp.view.ResultsPanel', 'MyApp.view.VideoPlayer', 
			   'MyApp.view.SettingsPanel', 'MyApp.view.HelpPanel', 'MyApp.view.LivePanel',
			   'MyApp.view.PlaylistPanel',
           ],
                
    views : ['MainPanel', 'ResultsPanel', 'VideoPlayer', 'SettingsPanel', 'HelpPanel', 'PlaylistPanel', 'LivePanel'],          
    controllers: ['Processes', 'Menu', 'Navigation'],
     
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
