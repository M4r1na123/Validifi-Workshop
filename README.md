# Validifi-Workshop
Welcome Ruti to vaidifi.This is a chrome extension for detecting trends of misinformation. 
It should run directly in the browser once the extension is installed without any connection to the server.
This repository should contain all the necessary code.
A littl bit about the flow of the application (AS planned):
upon installation:
background.js is running- it contains an event listener that listens to message "tokenize"
once the user entered any chrome tab:
cotent.js is running- this is the heart of the extension. This js is injected directly to the html of the tab and follows this flow:
-Event listener for selecting text
-once seleced aan html of a button injected to the tab
-once clicked a loading_popup.html is injected to the tab and a "tokenize" message is sent to the background.js file
in background.js (Already running from installation) :
- recieves "tokenize" message
- runs parsing.js
- accepts a "scriptRrunning" message
- upon recieving "scriptRunning"  sends "tokenize" again
 in parsing.js:
- sends "scriptRunning" message
- waiting for "tokenize" message with the selected text.
- loading token_bundle.js which contains the BERT LLM encoder.
- doing some wild linear algebra.
- sends a message "tokenizeResponse" with the calculated vector.
  continuing with content.js:
- recieving "tokenizeResponse" with the calculated vector.
- doing some basic linear algebra.
- injecting to the tab a response_popup.html
- adding to the response_popup the actual response
- Finito Baruch Ashem

  Q&A
  Here I'll answer some questions that pop (unlike my popups) in the mind of every sane developer:
-Why is it so complicated?
  It all started as one content.js file until I encountered permissions difficalties, so I had to take some functionality to the background.
  In the background I encountered more permissions difficalties so I took some functionality to parsing.js. I can elaborate more on the topic.
-Why the code looks like a frankenstein of chat-GPT inventions?
  Because it is exactly what it is. I studied by myself a little bot js, css and html so I would be able to understand what I am looking at,
   but I am less then a noob in the field with a professor that "believes" in me a liitle bit too much.
  I sincerely apologise for the readibility.
- Last but not least, what is the bug?
  I don't know, that's wy I need your help. I figured out the previous bug i was talking about, but now it is much worse.
  Everything works just fine until the loading popup. It is loading forever with no exceptions.
  I suspect there is a connectiong problem with all the messages, because it doesn't recieves the tokenizeResponse message.


Thank you very much! See you on Saturday <3


  
