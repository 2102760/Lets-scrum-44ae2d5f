chrome.storage.sync.get(['reviewCounter'], function(items) {
	if(items.reviewCounter) {
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
			var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
				const delay = ms => new Promise(res => setTimeout(res, ms));
				const yourFunction = async () => {
					await delay(1000);
					var myEle = document.getElementById('rCounter');
					if (myEle) {
						myEle.remove();
					}
					var bb = getElementByXpath(iframeDocument, "/html/body/app-root/app-page-header/div[2]/div[2]/app-page-reviews/div/app-reviews-overview-table/app-loading/div/div/mat-table").childNodes;
					var reviewsOpen = bb.length-4;
					var a = document.getElementsByClassName("header-container")[0].getElementsByClassName("right-side")[0];
					var rC = document.createElement("app-user-credits");
					rC.onclick = "document.getElementById('reviewsUrlCodeKnop').click()";
					rC.class = "ng-tns-c1-0";
					rC.style="display: flex; padding: 5px 0; cursor: pointer; border-right: 1px solid rgb(204, 204, 204) !important; margin-right: 10px;";
					rC.id = "rCounter";
					var extra = `
						<a href="https://jarvis.bit-academy.nl/a/code/reviews?state=OPEN" id="reviewsUrlCodeKnop"></a>
						<!---->
						<div _ngcontent-ffg-c3="" onclick="document.getElementById('reviewsUrlCodeKnop').click()" class="credit ng-star-inserted" aria-describedby="cdk-describedby-message-3" cdk-describedby-host="" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding-right: 10px; display: flex; align-items: center;">
							<mat-icon _ngcontent-ffg-c3="" class="mat-icon notranslate material-icons mat-icon-no-color" style="padding-right: 5px;" role="img" aria-hidden="true">
								rate_review
							</mat-icon>
							<span _ngcontent-ffg-c3="">
								` + reviewsOpen.toString() + `
							</span>
						</div>
						<!---->			
					`;
					rC.innerHTML = extra;
					a.insertBefore(rC, a.firstChild);
					//a.appendChild(rC);
					//a.innerHTML = extra + a.innerHTML;
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
	}
});