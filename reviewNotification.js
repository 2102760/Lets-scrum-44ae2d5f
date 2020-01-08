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

// setTimeout(() => {
//     const reviewAmountSpan = document.querySelector('#openReviews');
//     console.log(reviewAmountSpan);
//     reviewAmountSpan.addEventListener('change', change);
// }, 5000);

// var change = function() {
//     console.log('changed');
//     notifyMe('Er is mogelijk een review beschikbaar');
// }
var oldAmount = 0;

chrome.storage.sync.get(['reviewCounter'], function(items) {
	if(items.reviewCounter) {
        setInterval(() => {
            let NewreviewAmount = document.querySelector('#openReviews').innerHTML;
            console.log('old: ' + oldAmount);
            console.log('new: ' + NewreviewAmount);
            if (oldAmount < NewreviewAmount) {
                notifyMe('Er is mogelijk een nieuwe review beschikbaar');
            }
            oldAmount = NewreviewAmount;
        }, 5000);
    }
});
