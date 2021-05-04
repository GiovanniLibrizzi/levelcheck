window.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("btn_search");

    link.addEventListener("click", function() {
        var newURL = `https://plancke.io/hypixel/player/stats/${username.value}#BedWars`;
        chrome.tabs.create({ url: newURL });
    });

    var txtbox = document.getElementById("username");
    txtbox.onkeypress = function(e) {
        if (!e) e = window.event;
        var keyCode = e.code || e.key;
        if (keyCode == 'Enter') {
            var newURL = `https://plancke.io/hypixel/player/stats/${username.value}#BedWars`;
            chrome.tabs.create({ url: newURL });
            return false
        }
    }

});

