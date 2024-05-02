function padSequence(sequence, maxLength) {
  // If the sequence is already longer than the maximum length, truncate it
  if (sequence.length > maxLength) {
      return sequence.slice(0, maxLength);
  }

  // If the sequence is shorter, pad it with zeros
  const paddingLength = maxLength - sequence.length;
  const paddedSequence = sequence.concat(Array(paddingLength).fill(0));
  return paddedSequence;
}

// Function to tokenize text
function tokenizeText(text) {
  // Execute the tokenizer script in the current active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript({
      target: { allFrames: true },
      files: ['dist/token_bundle.js']
    }, function() {
      // Once the script is injected, use the tokenizer
      const tokenizer = new BertTokenizer();
      const tokens = tokenizer.encode(text);

      // Pad the sequence to a maximum length of 512
      const maxLength = 512;
      const paddedSequence = padSequence(tokens, maxLength);
      // Send the tokenization results back to the content script
      chrome.runtime.sendMessage({ action: 'tokenizeResponse', vector: paddedSequence });
    });
  });
}

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  chrome.runtime.sendMessage( { action: 'scriptRunning' })
  if (message.action === 'tokenize') {
    tokenizeText(message.text);
  }
});