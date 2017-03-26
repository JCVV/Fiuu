define('app', [
    'util/util'
], function(
    util
) {
    var fiuMedia = null;
    var audioSrc = "audio/fiuuu2.mp3";
    var app = {
        // Application Constructor
        initialize: function() {
            document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        },
        // deviceready Event Handler
        //
        // Bind any cordova events here. Common events are:
        // 'pause', 'resume', etc.
        onDeviceReady: function() {
            this.receivedEvent('deviceready');
            this.startFiu();
        },

        // Update DOM on a Received Event
        receivedEvent: function(id) {
            var parentElement = document.getElementById(id);
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        },

        startFiu: function() {
            fiuMedia = new Media(util.getPhoneGapPath() + audioSrc, function() {
                console.log('todo ok');
                alert('tirando');
            }, function(e) {
                console.log('todo mal');
            });
            // Start watching for shake gestures and call "onShake"
            // with a shake sensitivity of 40 (optional, default 30)
            shake.startWatch(this.onSuccess.bind(this), 50, this.onError);
        },

        onSuccess: function() {
            fiuMedia.play();
        },

        onError: function(e) {
            alert(e);
        }
    };
    return app;
});