chrome.storage.sync.get(['darkmode'], function(items) {
    console.log('Settings retrieved', items);

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
    }
});