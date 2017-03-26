define('fiuu', [
    'util/util'
], function(
    util
) {
    var fiuMedia = null;
    var audioSrc = "audio/fiuuu2.mp3";
    var fiuu = {
        startFiuu: function() {
            fiuMedia = new Media(util.getPhoneGapPath() + audioSrc, function() {
                console.log('todo ok');
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
    return fiuu;
});