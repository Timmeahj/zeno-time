const name = document.getElementById("name");
const catchPhrase = document.getElementById("catchphrase");
const words = document.getElementsByClassName("words");
const profilePic = document.getElementById("image").style.backgroundImage = "url('https://avatars.githubusercontent.com/u/103993166?s=400&u=7c8d3b81fb4ee52f9fd9112e71f9c1695b25d7e2&v=4')";
const travelPic = document.getElementById("travelPic").style.backgroundImage = "url('https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
const container = document.getElementById("container");
const containerMain = document.getElementById("test");
const containerMainTwo = document.getElementById("test2");
const body = document.getElementById("body");
const description = document.getElementById("colourDescription");
const descriptionAnimal = document.getElementById("animalDescription");
console.log(words[0].innerHTML);







//styling the page

name.innerHTML = "Michael Monteiro";
name.style.backgroundColor = "#e9edc9";
name.style.color = "#d4a373";
catchPhrase.innerHTML = "Never Stop Learning";
catchPhrase.style.color = "#CE9461"
container.style.backgroundColor = "#ccd5ae";
container.style.height ="100px";
words[0].innerHTML = "Improve yourself every day no matter how small of a change!";
words[0].style.color = "#d4a373"
body.style.backgroundColor = "#e9edc9";
containerMain.style.height = "200px";
containerMainTwo.style.height = "200px";
description.innerHTML = "Love to travel and see the world! Adventure Hiking all over the world!";
description.style.color = "#d4a373";
descriptionAnimal.style.color = "#d4a373";

containerMain.style.backgroundColor = "#ccd5ae";
containerMainTwo.style.backgroundColor = "#ccd5ae";