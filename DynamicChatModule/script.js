const chatbox = document.getElementById('chat-box');
const userInput = document.getElementById('text');

const predefinedQA = {
    "How are you?": "I'm good, thank you!\nHow are you?",
    "What are you?": "I'm a Chatbox",
    "Can you solve all my questions": "Unfortunately, my questions and answers are predefined!",
    "Goodbye": "Byeeee! I hope you have a wonderful day",
    "hi":"Hello, what can I do for you today?"
};

function sendMessage(){
    const userMessage = userInput.value.trim();

    displayMessage(userMessage);

    const answer = predefinedQA[userMessage];
    if(answer){
        displayMessage(answer);
    }
    else{
        displayMessage("I'm sorry, I don't understand");
    }

    userInput.value='';

}

function displayMessage(message){
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);



    chatbox.scrollTop = chatbox.scrollHeight;
}