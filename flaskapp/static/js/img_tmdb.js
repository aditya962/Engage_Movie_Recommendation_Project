// TMDB

const API_KEY = "API_KEY";
const BASE_URL = "https://api.themoviedb.org/3";
let API_URL =
  BASE_URL + "/search/movie?api_key=" + API_KEY + "&language=en-US&query=";

let movie = "";
let k = 0;
let m = 0;
function getImgURL(url, movieName, movieText) {
  let temp = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + url;
  document.getElementById(`recommendImg_${k}`).src = temp;
  document.getElementById(`recommendName_${k}`).innerHTML = movieName;
  document.getElementById(`recommendText_${k}`).innerHTML = movieText;
  k++;
}
function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      getImgURL(
        data.results[0].poster_path,
        data.results[0].original_title,
        data.results[0].overview
      );
    });
}
tempfilms = [];
for (let j = 0; j < 10; j++) {
  tempfilms.push(recommended[j]);
}
for (let i = 0; i < tempfilms.length; i++) {
  movie = tempfilms[i];
  temp = API_URL;
  API_URL = API_URL + movie;
  getMovies(API_URL);
  API_URL = temp;
}
m = 0;
let tempPopularMovies = [];
for (let j = 0; j < 10; j++) {
  tempPopularMovies.push(popularMovie[j]);
}
function setPopularMovie(url, movieName, movieText) {
  let temp = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + url;
  document.getElementById(`trendingImg_${m}`).src = temp;
  document.getElementById(`trendingHead_${m}`).innerHTML = movieName;
  document.getElementById(`trendingText_${m}`).innerHTML = movieText;
  m++;
}
function getPopularMovie(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setPopularMovie(
        data.results[0].poster_path,
        data.results[0].original_title,
        data.results[0].overview
      );
    });
}

for (let i = 0; i < tempPopularMovies.length; i++) {
  movie = tempPopularMovies[i];
  temp = API_URL;
  API_URL = API_URL + movie;
  getPopularMovie(API_URL);
  API_URL = temp;
}

let l = 0;
let tempsearchMovies = [];
for (let j = 0; j < 10; j++) {
  tempsearchMovies.push(searchMovie[j]);
}
function setsearchMovie(url, movieName, movieText) {
  let temp = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + url;
  document.getElementById(`searchImg_${l}`).src = temp;
  document.getElementById(`searchHead_${l}`).innerHTML = movieName;
  document.getElementById(`searchText_${l}`).innerHTML = movieText;
  l++;
}
function getsearchMovie(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setsearchMovie(
        data.results[0].poster_path,
        data.results[0].original_title,
        data.results[0].overview
      );
    });
}

for (let i = 0; i < tempsearchMovies.length; i++) {
  movie = tempsearchMovies[i];
  temp = API_URL;
  API_URL = API_URL + movie;
  getsearchMovie(API_URL);
  API_URL = temp;
}

let q = 0;
let tempactionMovies = [];
for (let j = 0; j < 10; j++) {
  tempactionMovies.push(actionMovie[j]);
}
function setactionMovie(url, movieName, movieText) {
  let temp = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + url;
  document.getElementById(`actionImg_${q}`).src = temp;
  document.getElementById(`actionHead_${q}`).innerHTML = movieName;
  document.getElementById(`actionText_${q}`).innerHTML = movieText;
  q++;
}
function getactionMovie(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setactionMovie(
        data.results[0].poster_path,
        data.results[0].original_title,
        data.results[0].overview
      );
    });
}

for (let i = 0; i < tempactionMovies.length; i++) {
  movie = tempactionMovies[i];
  temp = API_URL;
  API_URL = API_URL + movie;
  getactionMovie(API_URL);
  API_URL = temp;
}

let e = 0;
let tempadventureMovies = [];
for (let j = 0; j < 10; j++) {
  tempadventureMovies.push(adventureMovie[j]);
}
function setadventureMovie(url, movieName, movieText) {
  let temp = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + url;
  document.getElementById(`adventureImg_${e}`).src = temp;
  document.getElementById(`adventureHead_${e}`).innerHTML = movieName;
  document.getElementById(`adventureText_${e}`).innerHTML = movieText;
  e++;
}
function getadventureMovie(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setadventureMovie(
        data.results[0].poster_path,
        data.results[0].original_title,
        data.results[0].overview
      );
    });
}

for (let i = 0; i < tempadventureMovies.length; i++) {
  movie = tempadventureMovies[i];
  temp = API_URL;
  API_URL = API_URL + movie;
  getadventureMovie(API_URL);
  API_URL = temp;
}
let r = 0;
let tempcomedyMovies = [];
for (let j = 0; j < 10; j++) {
  tempcomedyMovies.push(comedyMovie[j]);
}
function setcomedyMovie(url, movieName, movieText) {
  let temp = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + url;
  document.getElementById(`comedyImg_${r}`).src = temp;
  document.getElementById(`comedyHead_${r}`).innerHTML = movieName;
  document.getElementById(`comedyText_${r}`).innerHTML = movieText;
  r++;
}
function getcomedyMovie(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setcomedyMovie(
        data.results[0].poster_path,
        data.results[0].original_title,
        data.results[0].overview
      );
    });
}

for (let i = 0; i < tempcomedyMovies.length; i++) {
  movie = tempcomedyMovies[i];
  temp = API_URL;
  API_URL = API_URL + movie;
  getcomedyMovie(API_URL);
  API_URL = temp;
}
let t = 0;
let tempanimationMovies = [];
for (let j = 0; j < 10; j++) {
  tempanimationMovies.push(animationMovie[j]);
}
function setanimationMovie(url, movieName, movieText) {
  let temp = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + url;
  document.getElementById(`animationImg_${t}`).src = temp;
  document.getElementById(`animationHead_${t}`).innerHTML = movieName;
  document.getElementById(`animationText_${t}`).innerHTML = movieText;
  t++;
}
function getanimationMovie(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setanimationMovie(
        data.results[0].poster_path,
        data.results[0].original_title,
        data.results[0].overview
      );
    });
}

for (let i = 0; i < tempanimationMovies.length; i++) {
  movie = tempanimationMovies[i];
  temp = API_URL;
  API_URL = API_URL + movie;
  getanimationMovie(API_URL);
  API_URL = temp;
}

let u = 0;
let tempdramaMovies = [];
for (let j = 0; j < 10; j++) {
  tempdramaMovies.push(dramaMovie[j]);
}
function setdramaMovie(url, movieName, movieText) {
  let temp = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + url;
  document.getElementById(`dramaImg_${u}`).src = temp;
  document.getElementById(`dramaHead_${u}`).innerHTML = movieName;
  document.getElementById(`dramaText_${u}`).innerHTML = movieText;
  u++;
}
function getdramaMovie(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setdramaMovie(
        data.results[0].poster_path,
        data.results[0].original_title,
        data.results[0].overview
      );
    });
}

for (let i = 0; i < tempdramaMovies.length; i++) {
  movie = tempdramaMovies[i];
  temp = API_URL;
  API_URL = API_URL + movie;
  getdramaMovie(API_URL);
  API_URL = temp;
}
let y = 0;
let tempromanceMovies = [];
for (let j = 0; j < 10; j++) {
  tempromanceMovies.push(romanceMovie[j]);
}
function setromanceMovie(url, movieName, movieText) {
  let temp = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + url;
  document.getElementById(`romanceImg_${y}`).src = temp;
  document.getElementById(`romanceHead_${y}`).innerHTML = movieName;
  document.getElementById(`romanceText_${y}`).innerHTML = movieText;
  y++;
}
function getromanceMovie(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setromanceMovie(
        data.results[0].poster_path,
        data.results[0].original_title,
        data.results[0].overview
      );
    });
}

for (let i = 0; i < tempromanceMovies.length; i++) {
  movie = tempromanceMovies[i];
  temp = API_URL;
  API_URL = API_URL + movie;
  getromanceMovie(API_URL);
  API_URL = temp;
}
