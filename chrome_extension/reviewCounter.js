function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

function collectionToArray(collection){
    var i, length = collection.length,
    array = [];
    for (i = 0;i< length;i++){
        array.push(collection[i]);
    }
    return array;
}
function getElementByXpath(dab, path) {
  return dab.evaluate(path, dab, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
var iframe = document.createElement("iframe");
iframe.id = "rFrame";
document.body.appendChild(iframe);
iframe.onload = function () {
	iframe = this;
    console.log("Hoeveelheid reviews open");
	var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
		const delay = ms => new Promise(res => setTimeout(res, ms));
		const yourFunction = async () => {
			await delay(1000);
			var myEle = document.getElementById('rCounter');
			if (myEle) {
				myEle.parentElement.parentElement.remove();
			}
			var bb = getElementByXpath(iframeDocument, "/html/body/app-root/app-page-header/div[2]/div[2]/app-page-reviews/div/app-reviews-overview-table/app-loading/div/div/mat-table").childNodes;
			var reviewsOpen = bb.length-4;
			console.log(reviewsOpen);
			var a = document.getElementsByClassName("header-container")[0].getElementsByClassName("right-side")[0];
			var extra = `
			<app-user-credits _ngcontent-ffg-c1="" onclick="document.getElementById('reviewsUrlCodeKnop').click()" class="ng-tns-c1-0" style="display: flex; padding: 5px 0; cursor: pointer;" _nghost-ffg-c3="">
				<!---->
				<div _ngcontent-ffg-c3="" onclick="document.getElementById('reviewsUrlCodeKnop').click()" class="credit ng-star-inserted" aria-describedby="cdk-describedby-message-3" cdk-describedby-host="" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding-right: 10px; border-right: 1px solid #ccc; display: flex; align-items: center; margin-right: 10px;">
					<mat-icon _ngcontent-ffg-c3="" class="mat-icon notranslate material-icons mat-icon-no-color" style="padding-right: 5px;" role="img" aria-hidden="true">
						rate_review
					</mat-icon>
					<span _ngcontent-ffg-c3="" id="rCounter">
						` + reviewsOpen.toString() + `
					</span>
				</div>
				<!---->
			</app-user-credits>
			
			`;
			a.innerHTML = extra + a.innerHTML;
		};
		yourFunction();
}
iframe.src = "https://jarvis.bit-academy.nl/a/code/reviews?state=OPEN";
iframe.width = "0px";
iframe.height = "0px";
iframe.contentWindow.location.reload();

function refreshData()
{
    x = 15;

    iframe.contentWindow.location.reload();

    setTimeout(refreshData, x*1000);
}
refreshData();