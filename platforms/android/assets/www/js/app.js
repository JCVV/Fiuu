define('app', [
    'fiuu',
], function(
    fiuu
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
            fiuu.startFiuu();
        },

        // Update DOM on a Received Event
        receivedEvent: function(id) {
            var parentElement = document.getElementById(id);
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        }
    };
    return app;
});