//Change the background color of the body
document.body.style.backgroundColor = "#000";

let quote = document.getElementsByTagName('q');

quote[0].addEventListener('mouseover', function () {
    document.body.style.fontFamily = "Roboto, sans-serif";
    document.body.style.fontWeight = "800";
    document.body.style.fontStyle = "italic";
})

//Center the header
let header = document.getElementsByTagName('header');
header[0].style.display = "flex";
header[0].style.flexDirection = "column";
header[0].style.alignItems = "center";

let headerRow = document.querySelector('.fullHeight');
headerRow.style.width = "100%";




// Handler 1
function createGrowingCircle (event) {
    // create new div
    const newDiv = document.createElement("div");

    newDiv.className = "circle";
    // Styling
    newDiv.style.width = "0";
    newDiv.style.height = "0";
    newDiv.style.border = "2px solid #000";
    newDiv.style.borderRadius = "50%";
    newDiv.style.alignItems = "center";
    newDiv.style.position = "absolute";
    newDiv.style.left = event.pageX + "px";
    newDiv.style.top = event.pageY + "px";

    //add the newly created element and its content to the DOM
    const currentDiv = document.querySelector('.challengeContainer');
    currentDiv.appendChild(newDiv);

    function growCircle (radius) {
        newDiv.style.transitionProperty = "width, height";
        newDiv.style.transitionDuration = "4s";
        newDiv.style.transform = "translateX(-50%) translateY(-50%)";
        setTimeout(() => {
            newDiv.style.width = radius * 2 + "px";
            newDiv.style.height = radius * 2 + "px";
        }, 0);
    }
    growCircle(245);
}

// CHALLENGE CONTAINER
const challengeContainer = document.querySelector('.challengeContainer');
const heightContainer = challengeContainer.offsetHeight;
const widthContainer = challengeContainer.offsetWidth;
console.log(heightContainer);
console.log(widthContainer);

// Event Listener
challengeContainer.addEventListener('click', createGrowingCircle);