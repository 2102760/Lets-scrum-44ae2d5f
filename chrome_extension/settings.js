var head=document.getElementsByTagName("HEAD")[0];
var style = document.createElement("style");
    style.innerHTML = 'mat-card#matcard-0{position:absolute;top:50%;left:20%;margin-right:-50%;transform:translate(-50%,-50%);height:35%}mat-card#matcard-1{position:absolute;top:50%;left:50%;margin-right:-50%;transform:translate(-50%,-50%);height:35%}mat-card#matcard-2{position:absolute;top:50%;left:80%;margin-right:-50%;transform:translate(-50%,-50%);height:35%}',
    head.appendChild(style)
;

var settingsBox = document.querySelector(".ng-tns-c9-2.ng-trigger.ng-trigger-multiComponentAppear");

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
    settingBody.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ipsum at mi semper feugiat. Vivamus a porttitor purus. Nulla varius faucibus posuere. Proin vel vestibulum justo, id scelerisque libero. Suspendisse viverra sollicitudin hendrerit. Donec vel suscipit massa. Morbi volutpat, felis eu facilisis rutrum, risus nibh luctus leo, at posuere elit turpis vitae risus.'
    createdSettingCard.appendChild(settingBody)
;

var matCards = document.getElementsByClassName("mat-card");

for (let index = 0; index < matCards.length; index++) {
    const element = matCards[index];
    element.id = 'matcard-' + index;
}