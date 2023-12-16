function updateTextArea(content) {
    // Get the current content of the text area
    var currentContent = document.getElementById('myTextarea').value;

    // Append the content of the button plus a tab to the text area
    var updatedContent = currentContent + '   ' + content;

    // Update the text area with the new content
    document.getElementById('myTextarea').value = updatedContent;

    // Manually trigger the 'input' event
    var event = new Event('input');
    document.getElementById('myTextarea').dispatchEvent(event);
}

// Get references to the textarea and the output paragraph
var inputTextArea = document.getElementById('myTextarea');
var outputText = document.getElementById('outputText');

// Add an event listener to the textarea for the 'input' event
inputTextArea.addEventListener('input', function() {
    // Update the content of the <p> with the textarea value
    outputText.textContent = this.value;

    
});
