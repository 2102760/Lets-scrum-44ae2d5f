var oldURL = " ";
setInterval(() => {
    if (oldURL != window.location.href) {
        if (window.location.href.includes('settings')) {
            loadSettings()
        }
        oldURL = window.location.href
    }
}, 1000);

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
                        <td style="padding-right: 60px;">
                            Pauze notificatie
                        </td>
                        <td id="breakTimer">
                            <div class="chip success ng-star-inserted">
                                <!---->
                                    <mat-icon _ngcontent-dwo-c29="" class="mat-icon notranslate material-icons mat-icon-no-color ng-star-inserted" role="img" aria-hidden="true">
                                        done_all
                                    </mat-icon>
                                    <!---->
                                    <!---->
                                    <!----> 
                                    Aan
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-right: 60px;">
                            Darkmode
                        </td>
                        <td id="breakTimer">
                            <div class="chip success ng-star-inserted">
                                <!---->
                                    <mat-icon _ngcontent-dwo-c29="" class="mat-icon notranslate material-icons mat-icon-no-color ng-star-inserted" role="img" aria-hidden="true">
                                        done_all
                                    </mat-icon>
                                    <!---->
                                    <!---->
                                    <!----> 
                                    Aan
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-right: 60px;">
                            Review counter
                        </td>
                        <td id="breakTimer">
                            <div class="chip success ng-star-inserted">
                                <!---->
                                    <mat-icon _ngcontent-dwo-c29="" class="mat-icon notranslate material-icons mat-icon-no-color ng-star-inserted" role="img" aria-hidden="true">
                                        done_all
                                    </mat-icon>
                                    <!---->
                                    <!---->
                                    <!----> 
                                    Aan
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-right: 60px;">
                            Chat
                        </td>
                        <td id="breakTimer">
                            <div class="chip success ng-star-inserted">
                                <!---->
                                    <mat-icon _ngcontent-dwo-c29="" class="mat-icon notranslate material-icons mat-icon-no-color ng-star-inserted" role="img" aria-hidden="true">
                                        done_all
                                    </mat-icon>
                                    <!---->
                                    <!---->
                                    <!----> 
                                    Aan
                            </div>
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

    var createdSettingCard = document.getElementById("improvement-content");


}