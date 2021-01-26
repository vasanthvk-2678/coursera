
(function() {
    var names = ["vasanth", "hari", "siva", "shishimaroe", "harry", "billy", "buggy", "butcher", "mahn", "shiro"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'h') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();