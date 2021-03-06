chrome.storage.sync.get(['chat'], function(items) {
    if(items.chat) {
		const delay = ms => new Promise(res => setTimeout(res, ms));

		function httpGet(theUrl) {
			var xmlHttp = new XMLHttpRequest();
			xmlHttp.open( "GET", theUrl, false );
			xmlHttp.send( null );
			return xmlHttp.responseText;
		}

		const changeTableSize = async () => {
			while (true){
				await delay(1000);
				try{
					const eventTable = document.getElementsByTagName("app-events-table");
					eventTable[0].style.maxHeight = "250px";
					eventTable[0].style.overflowY = "auto";
					eventTable[0].scrollTop = 0;
				}
				catch(error){
					var err = error;
				}
			}
		}

		const renderChat = async () => {
			await delay(1000);
			var chat = document.createElement('div');
			document.getElementsByClassName('ng-trigger-multiComponentAppear')[0].parentElement.appendChild(chat);
			var script = document.createElement('script');
			script.innerHTML = `function httpGet(theUrl) {
									var xmlHttp = new XMLHttpRequest();
									xmlHttp.open( "GET", theUrl, false );
									xmlHttp.send( null );
									return xmlHttp.responseText;
								}
								function getChat() {
		    						var chatContainer = document.getElementById('chatContainer');
		    						var obj = JSON.parse(httpGet("https://abababab.tk/bit/index.php?method=getMessages"));
		    						var newChat = '';
		    						for (var a in obj['results']) {
		    							var line = obj['results'][a];
		    						    newChat = line['time'] + ' ' + line['username'] + ': ' + line['message'] + '<br>' + newChat;
		    						}
		    						if (chatContainer.innerHTML !== newChat){
		    							chatContainer.innerHTML = newChat;	
		    							chatContainer.scrollTo(0, chatContainer.scrollHeight);
		    						}
								}
								function addEmoji(emoji){
									document.getElementById("messageInput").value += emoji;
								}
								function showEmojis(){
									document.getElementById("emojiContainer").style.display = "inherit";
								}
								function sendChatMessage(){
									var msg = document.getElementById('messageInput').value;
									var usr = document.getElementsByClassName('name')[0].innerHTML;
									document.getElementById('messageInput').value = '';
									var chatContainer = document.getElementById('chatContainer');
		    						var obj = JSON.parse(httpGet("https://abababab.tk/bit/index.php?method=sendMessage&message=" + msg + '&name=' + usr));
		    						chatContainer.innerHTML = '';
		    						for (var a in obj['results']) {
		    							var line = obj['results'][a];
		    						    chatContainer.innerHTML = line['time'] + ' ' + line['username'] + ': ' + line['message'] + '<br>' + chatContainer.innerHTML;
		    						}
		    						chatContainer.scrollTo(0, chatContainer.scrollHeight);
								}
								var input = document.getElementById("messageInput");
							    input.addEventListener("keyup", function(event) {
							        if (event.keyCode === 13)
							            sendChatMessage();
							    });
							var intervalID = window.setInterval(getChat, 1000);`;
			chat.innerHTML = httpGet('https://abababab.tk/bit/index.php?method=getDiv');
			document.getElementsByClassName('ng-trigger-multiComponentAppear')[0].appendChild(script);
		}


		changeTableSize();

		function isRendered(){
			var el = document.getElementById('allChat');
			if (typeof(el) != 'undefined' && el != null){
				var aaron = "klootzak";
			}
			else{
				if (window.location.href == 'https://jarvis.bit-academy.nl/a/dashboard'){
					renderChat();
				}
			}
		}
		window.setInterval(isRendered,3000);
	}
}); 
