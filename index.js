
let contEl = document.querySelector('#container');
let infoimg = document.querySelector(".infoimg");
let inforating = document.querySelector(".inforating");
let infotitle = document.querySelector(".infotitle");
let infodesc = document.querySelector(".infodesc");
let infovideo = document.querySelector(".infovideo");
let infovideoerror = document.querySelector(".infovideoerror");


// API key get

var settings = {
"url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=10",
"method": "GET",
"timeout": 0,
"headers": {
"api-version": "v200",
"Authorization": "Basic TkZNRF9YWDo5ZWhQcFA0OWNUc3M=",
"client": "FBQM",
"x-api-key": "k0CpFjNQu880p6mFez3pP4MSrPzZ4rQl9ksszUfW",
"device-datetime": "2022-09-30T12:07:57.296Z",
"territory": "XX",
},
};

$.ajax(settings).done(function (response) {
console.log(response.films);

var data = response.films;
data.forEach(createMovie);

});

function createMovie(object){

    var moviecard = document.createElement('div');
    moviecard.classList.add('movie');
    contEl.appendChild(moviecard);

    // moviecard.onclick = changeInfo;

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
    rating.style.backgroundImage="url(" + object.age_rating[0].age_rating_image + ")";
    title.textContent = object.film_name;

    moviecard.setAttribute('id', object.film_id);
    moviecard.onclick = funk;

    function funk(){
        // console.log(this.id);
        // console.log(object);
        inforating.style.backgroundImage="url(" + object.age_rating[0].age_rating_image + ")";
        infoimg.src = object.images.poster[1].medium.film_image;
        infotitle.textContent = object.film_name;
        infodesc.textContent = object.synopsis_long;
        infovideo.src = object.film_trailer;
        
        if(object.film_trailer === null){
            infovideo.style.visibility = "hidden";
        }

        else{
            infovideo.style.visibility = "visible"
        }
    }
}

//Not working Alert
function notWorking(){
        alert("This feature is unavailable at the moment.");
}

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



