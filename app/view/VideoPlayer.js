    Ext.define('MyApp.view.VideoPlayer', {
		extend: 'Ext.Container',
		alias: 'widget.videoPanel',
		config: {		
			layout: 'fit',         
			items: [
				//titlebar code
				{
					xtype: 'titlebar',
					docked: 'top',
					id: 'cbcmTitle',
					title: 'CBCM Media Player',
					items: [
						//home button
						{
							xtype: 'button',
							iconCls: 'home',
							align: 'left',
							itemID: 'homeBtn',
							action: 'callHome',
						},
						//search button
						{
							xtype: 'button',
							iconCls: 'search',
							align: 'right',
							itemId: 'searchBtn',
							action: 'callSearch'
						}
					]
				},
				{
				xtype: 'toolbar',
				docked: 'top',
				},
				/*
				{
					xtype: 'panel',
					flex: 1,
					items: [{
						xtype: 'video',
						url: 'http://webapps.figleaf.com/arch101/friends.mp4',
						autoPause: true,
						autoResume: true,
						enableControls: true,
						preload: true,
						posterUrl: 'http://webapps.figleaf.com/arch101/friends.png',
						layout: {
							type: 'vbox',
							fullscreen: true,
						},
						
						//comment out
						if (!this.getEnableControls() || Ext.os.is.Android) {
							this.add({
								xtype: 'button',
								text: 'Play Video',
								handler: function(b,e) {
									var video = this.getParent().down('video');
									if (video.isPlaying()) {
										video.pause();
										b.setText('Play Video');
									} else {
										video.play();
										b.setText('Pause Video');
									}
								}
							})
						}
						
					}],
					
				},
				*/
			]
			
		}
    }); 