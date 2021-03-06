var oldURL = " ";
setInterval(() => {
    if (oldURL != window.location.href) {
        if (window.location.href.includes('settings')) {
            loadSettings()
        }
        oldURL = window.location.href
    }
}, 1);

function loadSettings() {
    var head=document.getElementsByTagName("HEAD")[0];
    var style = document.createElement("style");
        style.innerHTML = 'mat-card{transition: none !important;}mat-card#matcard-0{position:absolute;top:50%;left:20%;margin-right:-50%;transform:translate(-50%,-50%);height:35%}mat-card#matcard-1{position:absolute;top:50%;left:50%;margin-right:-50%;transform:translate(-50%,-50%);height:35%}mat-card#matcard-2{position:absolute;top:50%;left:80%;margin-right:-50%;transform:translate(-50%,-50%);height:35%}',
        head.appendChild(style)
    ;

    var settingsBox = document.querySelector(".ng-trigger.ng-trigger-multiComponentAppear");

    var newSettingCard = document.createElement("mat-card");
        newSettingCard.className = "mat-card",
        newSettingCard.style = "margin: 25px; width: 400px;",
        newSettingCard.id = "matcard-2",
        settingsBox.appendChild(newSettingCard)
    ;

    var createdSettingCard = document.getElementById("matcard-2");

    var settingTitle = document.createElement("mat-card-title");
        settingTitle.className = "mat-card-title",
        settingTitle.innerHTML = 'Improvement instellingen',
        createdSettingCard.appendChild(settingTitle)
    ;

    var settingBody = document.createElement("mat-card-content");
        settingBody.className = "mat-card-content",
        settingBody.id = "improvement-content",
        settingBody.innerHTML = `
            <table> 
                <tbody>
                    <tr>
                        <td style="padding-right: 60px; position: relative; top: -3.2%;">
                            Pauze notificatie
                        </td>
                        <td id="breakTimer">

                        </td>
                    </tr>
                    <tr>
                        <td style="padding-right: 60px; position: relative; top: -3.2%;">
                            Darkmode
                        </td>
                        <td id="darkMode">

                        </td>
                    </tr>
                    <tr>
                        <td style="padding-right: 60px; position: relative; top: -3.2%;">
                            Review counter
                        </td>
                        <td id="reviewCounter">

                        </td>
                    </tr>
                    <tr>
                        <td style="padding-right: 60px; position: relative; top: -3.2%;">
                            Chat
                        </td>
                        <td id="chat">
                        
                        </td>
                    </tr>                    
                    <tr>
                        <td style="padding-right: 60px; position: relative; top: -3.2%;">
                            Challenge counter
                        </td>
                        <td id="challengeCounter">
                        
                        </td>
                    </tr>
                </tbody
            </table>
        `,
        createdSettingCard.appendChild(settingBody)
    ;

    var matCards = document.getElementsByClassName("mat-card");

    for (let index = 0; index < matCards.length; index++) {
        const element = matCards[index];
        element.id = 'matcard-' + index;
    }

    toggleSetting("breakTimer");
    toggleSetting("darkMode");
    toggleSetting("reviewCounter");
    toggleSetting("chat");
    toggleSetting("challengeCounter");
}

function toggleSetting(setting) {
    chrome.storage.sync.get([setting], function(items) {
        if(items[setting]) {
            displayLabel(true, setting);
        } else {
            displayLabel(false, setting);
        }
    });
}

function displayLabel(state, setting){
    var element = document.getElementById(setting);
    var flag = document.createElement("div");
        flag.className = `chip  ${state ? 'success': 'error'} ng-star-inserted`,
        flag.style.cursor = "pointer",
        flag.onclick = function() {
            var save = {};
            save[setting] = !state;
            chrome.storage.sync.set(save);
            window.location.href = window.location.href;
        };
        flag.innerHTML = `
            <mat-icon class="mat-icon notranslate material-icons mat-icon-no-color ng-star-inserted" role="img" aria-hidden="true">
                ${state ? 'done_all': 'not_interested'}
            </mat-icon>
            ${state ? 'Aan': 'Uit'}
        `,
        element.appendChild(flag)
    ;
}