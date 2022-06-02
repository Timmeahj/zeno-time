function addCircle (event) {
    // create new div
    const newDiv = document.createElement("div");

    newDiv.className = "circle";
    // Styling
    newDiv.style.width = "20px";
    newDiv.style.height = "20px";
    newDiv.style.border = "2px solid #000";
    newDiv.style.borderRadius = "50%";
    newDiv.style.alignItems = "center";
    newDiv.style.position = "absolute";
    newDiv.style.left = event.pageX + "px";
    newDiv.style.top = event.pageY + "px";
    //add the newly created element and its content to the DOM
    const currentDiv = document.querySelector('.challengeContainer');
    currentDiv.appendChild(newDiv);
}

// CHALLENGE CONTAINER
const challengeContainer = document.querySelector('.challengeContainer');

challengeContainer.addEventListener('click', addCircle);