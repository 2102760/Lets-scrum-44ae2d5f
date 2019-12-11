const toggle = document.querySelector('.toggle-input');
const initialState = localStorage.getItem('toggleState') == 'true';
toggle.checked = initialState;

toggle.addEventListener('change', function () {
  if (toggle.checked) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        { code: 'var head=document.getElementsByTagName("HEAD")[0],link=document.createElement("link");link.rel="stylesheet",link.id="dark",link.type="text/css",link.href="' + chrome.runtime.getURL('dark.css') + '",head.appendChild(link);' 
      });
    });

    chrome.storage.sync.set({'darkmode': true}, function() {
      log('Settings saved');
    });

  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          code: 'document.getElementById("dark").remove();'
        });
    });

    chrome.storage.sync.set({'darkmode': false}, function() {
      log('Settings saved');
    });

  }

  localStorage.setItem('toggleState', toggle.checked);
});

function log(msg){
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: 'console.log("' + msg + '");' 
    });
  });
}