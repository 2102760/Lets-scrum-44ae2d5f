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

var iframe = document.createElement("iframe");
document.body.appendChild(iframe);
iframe.src = "https://jarvis.bit-academy.nl/a/code/reviews?state=OPEN";
iframe.width = "0px";
iframe.height = "0px";
iframe.contentWindow.location.reload();
iframe.addEventListener("load", function(){
    console.log("Hoeveelheid reviews open");
	var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
	var hehe = new XMLSerializer().serializeToString(iframeDocument);
	var reviewsOpen = occurrences(hehe, "mat-row", false);
	console.log(reviewsOpen);
	
	var a = document.getElementsByClassName("header-container")[0].getElementsByClassName("right-side")[0];
	var extra = `
	<a href="/a/code/reviews?state=OPEN" id="reviewsUrlCodeKnop"></a>
	<app-user-credits _ngcontent-ffg-c1="" onclick="document.getElementById('reviewsUrlCodeKnop').click()" class="ng-tns-c1-0" style="display: flex; padding: 5px 0; cursor: pointer;" _nghost-ffg-c3="">
		<!---->
		<div _ngcontent-ffg-c3="" onclick="document.getElementById('reviewsUrlCodeKnop').click()" class="credit ng-star-inserted" aria-describedby="cdk-describedby-message-3" cdk-describedby-host="" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding-right: 10px; border-right: 1px solid #ccc; display: flex; align-items: center; margin-right: 10px;">
			<mat-icon _ngcontent-ffg-c3="" class="mat-icon notranslate material-icons mat-icon-no-color" style="padding-right: 5px;" role="img" aria-hidden="true">
				rate_review
			</mat-icon>
			<span _ngcontent-ffg-c3="">
				` + reviewsOpen.toString() + `
			</span>
		</div>
		<!---->
	</app-user-credits>
	
	`;
	a.innerHTML = extra + a.innerHTML;
	
	var name = document.querySelector("app-page-dashboard app-header h1").innerHTML.split('terug, ')[1].split('!')[0];
	if (name == "Aaron") {
		document.querySelector("app-page-dashboard app-student-position-in-group div.content-container span.green").innerHTML = "1%";
	}
});