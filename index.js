
let contEl = document.querySelector('#container');


var i = 0;
var images = [];
var time = 5000;

images[0] = '1.webp';
images[1] = '2.webp';
images[2] = '3.webp';

function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){i++;}
    else{i = 0;}

    setTimeout('changeImg()', time);
}

window.onload = changeImg();


function createMovies(){
    console.log("24 movies generated");
    for(let i = 0; i < 24; i++){
        const moviecard = document.createElement('div');
        moviecard.classList.add('movie');
        contEl.appendChild(moviecard);
    }
}



function darkMode() {
    contEl.classList.toggle("dark-mode");
  }