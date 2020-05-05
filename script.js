var textOutputElement = document.getElementById('textOutput');
var imageOutputElement = document.getElementById('imageOutput');
var messages = [
    'https://placekitten.com/g/300/300',
    'https://placekitten.com/g/301/300',
    'https://placekitten.com/g/302/300',
    'https://placekitten.com/g/303/300',
    'https://placekitten.com/g/304/300',
    'https://placekitten.com/g/305/300',
    
];
var currentMessageIndex = 3;
var updateMessageByIndex = function (index) {
    textOutputElement.innerHTML = messages[index];
    imageOutputElement.src = messages[index];
};
var cycleMessages = function () {
    var messageListLength = messages.length;
    var nextMessageIndex = (currentMessageIndex + 1) % messageListLength;
    currentMessageIndex = nextMessageIndex;
    updateMessageByIndex(currentMessageIndex);
};
setInterval(
    cycleMessages,
    1000,
);
