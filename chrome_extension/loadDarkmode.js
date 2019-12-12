chrome.storage.sync.get(['darkmode'], function(items) {
    if(items.darkmode) {
        chrome.runtime.sendMessage({file: "dark.css"}, function(response) {
            var head=document.getElementsByTagName("HEAD")[0],link=document.createElement("link");
                link.rel="stylesheet",
                link.id="dark",
                link.type="text/css",
                link.href=response.link,
                head.appendChild(link)
            ;
        });
        var rightSide =document.getElementsByClassName("right-side")[0],
            switchen=document.createElement("div");
            switchen.onclick = function() { 
                chrome.storage.sync.set({'darkmode': false});
                window.location.href = window.location.href;
            };
            switchen.style = "margin-top: auto; margin-bottom: auto; padding-right: 10px; cursor: pointer;",
            switchen.innerHTML='<i class="material-icons">nights_stay</i>',
            rightSide.insertBefore(switchen, rightSide.firstChild)
        ;
    } else {
        var rightSide =document.getElementsByClassName("right-side")[0],
            switchen=document.createElement("div");
            switchen.onclick = function() { 
                chrome.storage.sync.set({'darkmode': true});
                window.location.href = window.location.href;
            };
            switchen.style = "margin-top: auto; margin-bottom: auto; padding-right: 10px; cursor: pointer;",
            switchen.innerHTML='<i class="material-icons">wb_sunny</i>',
            rightSide.insertBefore(switchen, rightSide.firstChild)
        ;
    }
});

document.getElementsByTagName("app-user-credits")[0].style.borderLeft = "1px solid #ccc";
document.getElementsByTagName("app-user-credits")[0].style.borderRight = "1px solid #ccc";
document.getElementsByClassName("credit")[0].style.paddingLeft = "10px";

function changeMode(state) {
    if (state) {
        alert('1');
        chrome.storage.sync.set({'darkmode': true}, function() {
            console.log('Value is set to ' + value);
        });
    } else {
        chrome.storage.sync.set({'darkmode': false}, function() {
            console.log('Value is set to ' + value);
        });
    }
}