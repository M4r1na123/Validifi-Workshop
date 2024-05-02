// event_script.js


  
  // Listen for messages from content scripts
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'tokenize') {
        chrome.scripting.executeScript({
            target: {tabId: sender.tab.id, allFrames: true },
            files: ['parsing.js'] 
          });
          if (message.action === 'scriptRunning') {
              chrome.runtime.sendMessage({ action: 'tokenize', message });
            }
        }
      });
    
 
  