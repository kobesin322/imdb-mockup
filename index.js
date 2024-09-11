const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTkwNDIzNDY3ODZhOTIxY2E3MzJmZmM0YzAxYTIxZiIsIm5iZiI6MTcyMTgwNzc3MC40NTAyNzcsInN1YiI6IjY2YTBhN2VhZjdhMTE0YTA4M2UwZDRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SQjgB9waWCim1CPQFSbrHehebcAcr4uDQV8iIYgIrps",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
      console.log(movies);

      movies.forEach((movie) => {
        const posterPath = movie.poster_path;
        const posterUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;
        const overview = movie.overview.substring(0, 100) + "..";
        const title = movie.title;
        const popularity = parseInt(movie.popularity);

        //Dom Manipulation
        const moviePoster = document.createElement("div");
        moviePoster.classList.add("movie-poster");

        const img = document.createElement("img");
        img.src = posterUrl;
        img.alt = movie.title;

        const description = document.createElement("div");
        description.classList.add("movie-poster-popover");

        const overlay = document.createElement("div");
        overlay.classList.add("movie-poster-overlay");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const blank = document.createElement("p");

        const p4 = document.createElement("p");
        const p5 = document.createElement("p");

        const popularityDiv = document.createElement("div");
        popularityDiv.classList.add("popularity-div");

        const mobilePopularityDiv = document.createElement("div");
        mobilePopularityDiv.classList.add("popularity-div");

        const fire = document.createElement("div");
        const fireImage = document.createElement("img");
        fireImage.src = "./fire.png";
        fire.classList.add("fire");
        fire.appendChild(fireImage);

        const mobileFire = document.createElement("div");
        const mobileFireImage = document.createElement("img");
        mobileFireImage.src = "./fire.png";
        mobileFire.classList.add("fire");
        mobileFire.appendChild(mobileFireImage);

        p1.classList.add("movie-text-a");
        p2.classList.add("movie-text-b");
        p3.classList.add("movie-text-c");

        p4.classList.add("movie-text-a");
        p5.classList.add("movie-text-c");

        p1.textContent = title;
        p2.textContent = overview;
        p3.textContent = popularity;
        blank.textContent = "";

        p4.textContent = title;
        p5.textContent = popularity;
        blank.textContent = "";

        popularityDiv.appendChild(fire);
        popularityDiv.appendChild(p3);

        mobilePopularityDiv.appendChild(mobileFire);
        mobilePopularityDiv.appendChild(p5);

        description.appendChild(p1);
        description.appendChild(p2);
        description.appendChild(popularityDiv);

        overlay.appendChild(blank);

        moviePoster.appendChild(img);
        moviePoster.appendChild(overlay);
        moviePoster.appendChild(description);

        const mobileDescription = document.createElement("div");
        mobileDescription.classList.add("mobile-desc");
        mobileDescription.appendChild(p4);
        mobileDescription.appendChild(mobilePopularityDiv);

        //For Mobile Description
        const moviePosterWrap = document.createElement("div");

        moviePosterWrap.appendChild(moviePoster);
        moviePosterWrap.appendChild(mobileDescription);

        gallery.appendChild(moviePosterWrap);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});


const openBtn = document.querySelector("#open-menu");
const closeBtn = document.querySelector("#close-menu");
const popout = document.querySelector(".popout-menu");

console.log(openBtn,popout);

openBtn.addEventListener("click", function(){
    popout.classList.toggle('active');
 });

closeBtn.addEventListener("click", function(){
  popout.classList.toggle('active');
});
