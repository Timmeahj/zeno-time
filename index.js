const name = document.getElementById("name");
const catchPhrase = document.getElementById("catchphrase");
const words = document.getElementsByClassName("words");
const profilePic = document.getElementById("image").style.backgroundImage = "url('https://avatars.githubusercontent.com/u/103993166?s=400&u=7c8d3b81fb4ee52f9fd9112e71f9c1695b25d7e2&v=4')";
const travelPic = document.getElementById("travelPic").style.backgroundImage = "url('https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
document.getElementById("travelPic").style.backgroundSize = "700px 500px";
const animalPic = document.getElementById("animalPic").style.backgroundImage = "url('https://scontent.xx.fbcdn.net/v/t1.15752-9/285439710_439288074690679_6538313519351398617_n.jpg?stp=dst-jpg_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=MNoNeajumOQAX_Nr0px&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI0tuJmlBguEtXAznAfRUu-pb-urEBjIZwnjDS3DrYpkg&oe=62BD85C4')";
const CharacterPic = document.getElementById("characterPic").style.backgroundImage = "url('https://static0.srcdn.com/wordpress/wp-content/uploads/2019/12/Babu-Frik-Star-Wars-Rise-of-Skywalker.jpg')";
const sportPic = document.getElementById("sportPic").style.backgroundImage = "url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
const famousPic = document.getElementById("famousPic").style.backgroundImage = "url('https://historycouk.s3.eu-west-2.amazonaws.com/s3fs-public/2022-01/morgan%20freeman-min.jpg')";
const container = document.getElementById("container");
const containerMain = document.getElementById("test");
const containerMainTwo = document.getElementById("test2");
const containerMainThree = document.getElementById("test3");
const containerMainFour = document.getElementById("test4");
const containerMainFive = document.getElementById("test5");
const body = document.getElementById("body");
const description = document.getElementById("colourDescription");
const descriptionAnimal = document.getElementById("animalDescription");
const descriptionSport = document.getElementById("sportDescription");
const descriptionCharacter = document.getElementById("characterDescription");
const descriptionCelebrity = document.getElementById("celebrityDescription");
const challenge = document.getElementById("challengeText");


console.log(words[0].innerHTML);


//styling the page

body.style.backgroundColor = "#e9edc9";

name.innerHTML = "Michael Monteiro";
name.style.backgroundColor = "#e9edc9";
name.style.color = "#d4a373";

catchPhrase.innerHTML = "Never Stop Learning";
catchPhrase.style.color = "#CE9461"

container.style.backgroundColor = "#ccd5ae";
container.style.height ="150px";

words[0].innerHTML = "Improve yourself every day no matter how small of a change!";
words[0].style.color = "#d4a373"

containerMain.style.height = "200px";
containerMainTwo.style.height = "350px";
containerMainThree.style.height = "350px";
containerMainFour.style.height = "350px";
containerMainFive.style.height = "350px";
containerMain.style.backgroundColor = "#ccd5ae";
containerMainTwo.style.backgroundColor = "#ccd5ae";
containerMainThree.style.backgroundColor = "#ccd5ae";
containerMainFour.style.backgroundColor = "#ccd5ae";
containerMainFive.style.backgroundColor = "#ccd5ae";


//descriptions
description.innerHTML = "Love to travel and see the world! Adventure Hiking all over the world!";
description.style.fontSize = '25px'
description.style.color = "#d4a373";
descriptionAnimal.style.color = "#d4a373";
descriptionAnimal.style.fontSize = '35px'
descriptionSport.style.color = "#d4a373";
descriptionSport.style.fontSize = '40px'
descriptionCharacter.style.color = "#d4a373";
descriptionCharacter.style.fontSize = '45px'
descriptionCelebrity.style.color = "#d4a373";
descriptionCelebrity.style.fontSize = '30px'
descriptionSport.innerHTML = "Football is my go to Sport! I also like to to Hiking and swimming!";
descriptionCharacter.innerHTML = "Babu Frik can do it all! When all hope is lost, he will fix it!";
descriptionAnimal.innerHTML = "My ALL Time Favorite Animal is My Cat NALA!";
descriptionCelebrity.innerHTML = "Morgan Freeman is one of the best actors imo and he also shares his wisdom and point of view on the world inspiring other people";


challenge.style.color = "#d4a373";