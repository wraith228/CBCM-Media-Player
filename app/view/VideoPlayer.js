    Ext.define('MyApp.view.VideoPlayer', {
		extend: 'Ext.form.Panel',
		alias: 'widget.videoPanel',
		config: {		
			xtype: 'panel',
			layout: 'vbox',
			style: 'background:#f2f2f2;',
			flex: 1,
			items: [
				{
					xtype:'panel',
					height: 30,
					style: 'background:#f2f2f2;',
					id: 'noticeBar',
				},
				{
					xtype:'panel',
					layout: 'hbox',
					style: 'background:#f2f2f2;',
					//Video player layout code goes here
					items: [
						{
							xtype: 'button',
							action: 'addPlaylist',
							iconCls: 'add',
							tooltip: 'Add to playlist'
						},
					]
				},
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
						//posterUrl: 'http://webapps.figleaf.com/arch101/friends.png',
						layout: {
							type: 'vbox',
							fullscreen: true,
						},

						/*
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
						*/
					}],				
				},
				//Detailed view goes here
				{
		                        items: [
		                            {
		                                xtype:'panel',
		                                html: '<a href="http://www.google.com">This is where the video goes</a>',
		                                flex:10,
		                                pack:'center'
		                            },
		                            {
		                                xtype:'panel',
		                                id:'Details',
		                                flex:1
		                            
		                            },
		                            {
		                                xtype:'panel',
		                                id: 'description',
		                                flex:1,
		                            },
		                        
		                        ]
                    
				}
				
			]			
		}
		
    }); 
