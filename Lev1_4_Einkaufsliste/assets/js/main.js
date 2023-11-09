function addElement (elt) {
    const newElement = document.createElement('li');
    newElement.textContent = elt;
    myList.append(newElement);
};

document.body.querySelector("#button").addEventListener("click", () => {
    if (inputText.value.trim() == ""){
        alert("Bitte Textfeld ausfüllen.")
    } else {
        addElement(inputText.value);
        inputText.value = "";
    }
});