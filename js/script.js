function addCircle () {
    //create new div
    const newDiv = document.createElement("div");

    //let's first give it some content
    const content = document.createTextNode("Hi I will become a circle!");

    //add the text node to the new div
    newDiv.appendChild(content);

    //add the newly created element and its content to the DOM
    const currentDiv = document.querySelector('.challengeContainer');
    currentDiv.appendChild(newDiv);
}

const challengeContainer = document.querySelector('.challengeContainer');

challengeContainer.addEventListener('click', addCircle);