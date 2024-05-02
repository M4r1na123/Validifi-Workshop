chrome.storage.local.get(['response'], function(data) {
  document.getElementById('response').textContent = data.response || 'No response yet';
});


// const reportBtn = document.getElementById("bug-btn")
// reportBtn.addEventListener("click", () => {
//   chrome.runtime.sendMessage(null, text, (response) => {
//     console.log("I'm from the send response function: " + response)
// })
// })



// function sendTextToServer(text) {
//   fetch('http://localhost:5000/process_text', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: 'text=' + encodeURIComponent(text)
//   })
//   .catch(error => console.error('Error:', error));
// }


