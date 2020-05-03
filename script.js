var textOutputElement = document.getElementById('textOutput');
var messages = [
    'Bob',
    'goat',
    'learn_to_code',
    'hello_world',
];
var currentMessageIndex = 3;
var updateMessageByIndex = function (index) {
    textOutputElement.innerHTML = messages[index];
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
