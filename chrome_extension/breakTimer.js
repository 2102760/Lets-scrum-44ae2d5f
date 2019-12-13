
function notifyMe(msg) {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("Deze browser support geen notificaties");
    }
    
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification(msg);
    }
    
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
            var notification = new Notification(msg);
            }
        });
    }
    
    // At last, if the user has denied notifications, and you 
    // want to be respectful there is no need to bother them any more.
}

var breakStartTimes = [
    "11:0:0",
    "12:30:0",
    "14:30:0"
];
var breakEndTimes = [
    "11:15:0",
    "13:0:0",
    "14:45:0"
];

var today = new Date();
var day = today.getDay();

chrome.storage.sync.get(['breakTimer'], function(items) {
    if(items.breakTimer) {
        if (day < 6) {
            setInterval(() => {
                var today = new Date();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                breakStartTimes.forEach(element => {
                    if (time === element) {
                        notifyMe('Het is pauze geniet er van!');
                    }
                });
                breakEndTimes.forEach(element => {
                    if (time === element) {
                        notifyMe('De pauze is voorbij, je moet weer aan de slag!');
                    }
                });

                if (time === "16:0:0") {
                    notifyMe('De les is voorbij, fijne reis');
                }
            }, 1000);
        }
    }
});