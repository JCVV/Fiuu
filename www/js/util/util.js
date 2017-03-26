define('util/util', [], function() {
    var util = {
        getPhoneGapPath: function() {
            var path = window.location.pathname;
            path = path.substr(path, path.length - 10);
            var devicePlatform = device.platform;
            if (devicePlatform == "Android") {
                path = 'file://' + path;
            }
            return path;
        }
    };
    return util;
});