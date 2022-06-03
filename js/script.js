//Change the background color of the body
document.body.style.backgroundColor = "#000";

let quote = document.getElementsByTagName('q');

quote[0].addEventListener('mouseover', function () {
    document.body.style.fontFamily = "Roboto, sans-serif";
    document.body.style.fontWeight = "800";
    document.body.style.fontStyle = "italic";
    quote[0].innerText = `I do love Impact, but also Roboto`;
})

//Center the header
let header = document.getElementsByTagName('header');
header[0].style.display = "flex";
header[0].style.flexDirection = "column";
header[0].style.alignItems = "center";

    //header row content styling, the image with the words
    let headerRow = document.querySelector('.fullHeight');
    headerRow.style.width = "100%";

    let iDontLikeFlex = document.querySelector('.iDontLikeFlex');
    iDontLikeFlex.style.justifyContent = "center";
    iDontLikeFlex.style.width = "30%";

    let zeno = document.querySelector('.cedric');
    zeno.style.width = "70%";
    let imageZeno = document.querySelector('.backgroundImage');
    imageZeno.style.backgroundSize = "auto 60%";

//Change favourite color
let favColor = document.querySelector('.bordeaux');
let colorDescription = document.getElementById('colourDescription');
favColor.addEventListener('click', function (){
    favColor.style.background = "rgb(0 217 255)";
    document.body.style.color = "rgb(200 200 200)";
    colorDescription.innerText = `RA RA RA............. AND IT'S BLUE`;
})

//Change favourite animal
let animalDescription = document.getElementById('animalDescription');
let animalButton = document.createElement("button");
let animalPicture = document.querySelector('.animalPic');
animalButton.innerHTML = "No really?!";
animalButton.addEventListener('click', function () {
    animalDescription.innerText = "I do like mythical beings, and it would be so cool if bigfoot or a yeti would be real. But then again poor them, they would be stuck in a lab or zoo for life. But my all time favourite animal is ManBearPig."
    animalPicture.style.background = "url(img/manBearPig.jpg)";
    animalPicture.style.backgroundRepeat = "no-repeat";
    animalPicture.style.backgroundPosition = "center";
    animalPicture.style.backgroundSize = "auto 100%";
})
animalDescription.appendChild(animalButton);

//Change favourite sport
let sportDescription = document.getElementById('sportDescription');
let sportPicture = document.querySelector('.hockey');
sportPicture.addEventListener('mouseover', function (){
    sportDescription.innerText = "Luckily I'm already a Magic Mike for my girlfriend, but nicely done Channing you made it from the stripper pole life to stardom. So respect for those Mikes out there, keep on swinging. I would rather say that my favourite sport is cheese rolling. It's just all laughs and cheese."
    sportPicture.style.background = "url(img/cheese.gif)";
    sportPicture.style.backgroundRepeat = "no-repeat";
    sportPicture.style.backgroundPosition = "center";
    sportPicture.style.backgroundSize = "auto 100%";
})

//Change favourite character
let charDescription = document.getElementById('characterDescription');
let charPicture = document.querySelector('.khal');
let charButton = document.createElement("button");
charButton.innerHTML = "My nieces made me watch it!"
charButton.addEventListener('click', function (){
    charDescription.innerText = "No really! They made me watch it when i was still an innocent child! My favourite character is actually 'Luffy' from One Piece. Why?! Because I grew up loving everything about pirates, so anime and pirates, I mean come on!"
    charPicture.style.background = "url(img/luffy.gif)";
    charPicture.style.backgroundRepeat = "no-repeat";
    charPicture.style.backgroundPosition = "center";
    charPicture.style.backgroundSize = "auto 100%";
})
charDescription.appendChild(charButton);

//Change favourite celebrity
let celebDescription = document.getElementById('celebrityDescription');
let celebPicture = document.querySelector('.keanu');
celebPicture.addEventListener('mouseover', function (){
    celebDescription.innerText = "What a representative for a healthy lifestyle in Belgium. I mean for our international view about health we couldn't have a chosen a better person, I agree... But anyhow I'm not a person who really has a celebrity crush or whatever, to me they are also just people like you and I. But since we have to choose one I would go with Nick Offerman."
    celebPicture.style.background = "url(img/nickOfferman.gif)";
    celebPicture.style.backgroundRepeat = "no-repeat";
    celebPicture.style.backgroundPosition = "center";
    celebPicture.style.backgroundSize = "auto 30%";
})

// Handler 1
function createGrowingCircle (event) {
    // create new div
    const newDiv = document.createElement("div");

    newDiv.className = "circle";
    // Styling
    newDiv.style.width = "0";
    newDiv.style.height = "0";
    newDiv.style.border = "2px solid #fff";
    newDiv.style.backgroundColor = "blue"
    newDiv.style.borderRadius = "50%";
    newDiv.style.alignItems = "center";
    newDiv.style.position = "absolute";
    newDiv.style.overflow = "hidden";
    newDiv.style.left = event.pageX + "px";
    newDiv.style.top = event.pageY + "px";

    //add the newly created element and its content to the DOM
    const currentDiv = document.querySelector('.challengeContainer');
    currentDiv.style.overflow = "hidden";
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