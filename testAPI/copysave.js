
let contEl = document.querySelector('#container');
let infoimg = document.querySelector(".infoimg");
let inforating = document.querySelector(".inforating");
let infotitle = document.querySelector(".infotitle");
let infodesc = document.querySelector(".infodesc");
let infovideo = document.querySelector(".infovideo");


// API key get

var settings = {
"url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=10",
"method": "GET",
"timeout": 0,
"headers": {
"api-version": "v200",
"Authorization": "Basic RkJRTV9YWDpQNDFYOXJsVWc2SGM=",
"client": "FBQM",
"x-api-key": "NuaczzpB8zvjbY6NwA7iaWepxEsogUi3jgsoQ74a",
"device-datetime": "2022-09-27T12:07:57.296Z",
"territory": "XX",
},
};

$.ajax(settings).done(function (response) {
console.log(response.films);

var data = response.films;
data.forEach(createPlaceHolders);

});

function createPlaceHolders(object){

    var moviecard = document.createElement('div');
    moviecard.classList.add('movie');
    contEl.appendChild(moviecard);

    var moviebox = document.createElement('div');
    moviebox.classList.add('moviebox');
    moviecard.appendChild(moviebox);

    var rating = document.createElement('h2');
    rating.classList.add('movierating');
    moviebox.appendChild(rating);

    var title = document.createElement('h2');
    title.classList.add('movietitle');
    moviecard.appendChild(title);

    moviecard.style.backgroundImage="url(" + object.images.poster[1].medium.film_image + ")";
    title.textContent = object.film_name;
    // rating.textContent = object.;
}


//Not working Alert
function notWorking(){
        alert("This feature is unavailable at the moment.");
}

// Image Carousel 
var i = 0;
var images = [];
var time = 5000;

images[0] = 'images/1.webp';
images[1] = 'images/2.webp';
images[2] = 'images/3.webp';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){i++;}
    else{i = 0;}

    setTimeout('changeImg()', time);
}

window.onload = changeImg();


// Dark Mode

function darkMode() {
    var element = document.body;
    var header = document.getElementsByTagName("header")[0];
    var footer = document.getElementsByTagName("footer")[0];

    element.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");


    var content = document.getElementById("container");
    content.classList.toggle("dark-cont");
    // content.style.backgroundColor = "green";

  }



