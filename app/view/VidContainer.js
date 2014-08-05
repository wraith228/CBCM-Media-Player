    Ext.define('MyApp.view.VidContainer', {
		extend: 'Ext.Container',
		alias: 'widget.vidContainer',
		config: {
			url: 'http://webapps.figleaf.com/arch101/friends.mp4',
			autoPause: true,
			autoResume: true,
			enableControls: false,
			preload: true,
			posterUrl: 'http://webapps.figleaf.com/arch101/friends.png',
			layout: {
				type: 'vbox'
			}
		},
		initialize: function() {
			this.callParent(arguments);
			this.add({
				xtype: 'video',
				url: this.getUrl(),
				flex: 1,
				autoResume: this.getAutoResume(),
				preload: this.getPreload(),
				autoPause: this.getAutoPause(),
				enableControls: this.getEnableControls(),
				posterUrl: this.getPosterUrl()
			});
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
		}
    }); 