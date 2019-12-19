var openChallengeCount = 0;

chrome.storage.sync.get(['challengeCounter'], function(items) {
    if(items.challengeCounter) {
        var rightSide =document.getElementsByClassName("right-side")[0],
        counter=document.createElement("app-user-credits");
        counter.style = "border-right: 1px solid rgb(204, 204, 204); display: flex;",
        counter.innerHTML='<div class="credit ng-star-inserted" aria-describedby="cdk-describedby-message-3" cdk-describedby-host="" style="display: flex; align-items: center;padding-right: 10px;"> <mat-icon class="mat-icon notranslate material-icons mat-icon-no-color" role="img" aria-hidden="true" style="padding-right: 5px;">whatshot</mat-icon><span id=countChallenge>?</span></div>',
        rightSide.insertBefore(counter, rightSide.firstChild)

        var ifrm = prepareFrame('https://jarvis.bit-academy.nl/a/code/modules/', 'modules');

        setTimeout(() => {
            var win = ifrm.contentWindow;
            var doc = ifrm.contentDocument? ifrm.contentDocument: ifrm.contentWindow.document;
            setTimeout(() => {
                var modules = doc.getElementsByTagName("app-module-block");
                var modulesId = [];
                for (let index = 0; index < modules.length; index++) {
                    const module = modules[index];
                    const insideModuleClass = module.getElementsByTagName("div")[0].getAttribute("class");
                    if (insideModuleClass.includes('enrolled') || insideModuleClass.includes('finished')) {
                        modulesId.push(module.getAttribute("module-id"));
                    }
                }

                setTimeout(() => {
                    for (let index = 0; index < modulesId.length; index++) {
                        const moduleId = modulesId[index];
                        prepareModuleFrame('https://jarvis.bit-academy.nl/a/code/modules/' + moduleId, moduleId);
                    }
                }, 1500);
            }, 1500);
        }, 500);
        setTimeout(() => {
            console.log('time');
            document.getElementById("countChallenge").innerHTML = openChallengeCount;
        }, 60000);
        setTimeout(() => {
            console.log('hier komt de counter');
            console.log(openChallengeCount);
            console.log('hier was de counter');
        }, 15000);
    }
});

function prepareFrame(src, id) {
    var oldIfrm = document.getElementById(id);
    if(oldIfrm){
        oldIfrm.remove();
    }
    var newIfrm = document.createElement("iframe");
    newIfrm.setAttribute("src", src);
    newIfrm.id = id;
    newIfrm.style.width = "500px";
    newIfrm.style.height = "500px";
    document.body.appendChild(newIfrm);

    return document.getElementById(id);
}

function prepareModuleFrame(src, id) {
    var oldIfrm = document.getElementById(id);
    if(oldIfrm){
        oldIfrm.remove();
    }
    var newIfrm = document.createElement("iframe");
    newIfrm.setAttribute("src", src);
    newIfrm.id = id;
    newIfrm.style.width = "500px";
    newIfrm.style.height = "500px";
    document.body.appendChild(newIfrm);

    var createdIfrm = document.getElementById(id);

    setTimeout(() => {
        var docum = createdIfrm.contentDocument? createdIfrm.contentDocument: createdIfrm.contentWindow.document;
        console.log('----------START---------------');
        // var levels = docum.getElementsByTagName("mat-panel-title");

        // for (const level of levels) {
        //     console.log('1');
        // }
        
        let collection = docum.getElementsByTagName("mat-expansion-panel"); 

        for (item of collection) { 
            if(item.innerHTML.includes('lock_open') && item.innerHTML.includes('whatshot')){
                openChallengeCount++;
            }
        } 
        console.log('----------END---------------');
    }, 10000);
}