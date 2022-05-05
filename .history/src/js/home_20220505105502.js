/* 
class Movie {
  constructor(id, movieName, genre, comingSoon, availDate, thumbNail, preview) {
    this.id = id;
    this.name = movieName;
    this.genre = genre;
    this.comingSoon = comingSoon;
    this.availDate = availDate;
    this.thumbnail = thumbNail;
    this.preview = preview;
  }
} */

import { MovieList } from "/src/classes/movie-list";

const LOGGED_IN_USER_KEY = "logged-in-user-storage-key";
const WATCH_LIST_KEY = "watch-list-storage-key";


const { createApp } = window.Vue;


const component = {

  data() {
    return {

      movieList:MovieList,

      /* movieList: [
        new Movie(
          "pi8HsKXN5G",
          "Everest",
          "Adventure",
          false,
          "18/09/2015",
          "/src/images/Everest.jpg",
          "https://www.youtube.com/watch?v=5ZQVpPiOji0"
        ),

        new Movie(
          "zhfzHGhFjK",
          "The Fast and The Furious",
          "Action",
          false,
          "22/06/2001",
          "/src/images/fast-and-furious-1.jpg",
          "https://www.youtube.com/watch?v=GoSUdZJg3pw"
        ),

        new Movie(
          "TymNNADk_X",
          "2 Fast 2 Furious",
          "Action",
          false,
          "06/06/2003",
          "/src/images/fast-and-furious-2.jpg",
          "https://www.youtube.com/watch?v=ZZGkV_xWGw4",
        ),

        new Movie(
          "N7xyWhg0i",
          "Fast and Furious",
          "Action",
          false,
          "12/03/2009",
          "/src/images/fast-and-furious-4.jpg",
          "https://www.youtube.com/watch?v=BCg9R_MGZKg",
        ),

        new Movie(
          "vdPZEOGsEj",
          "Fast 5",
          "Action",
          false,
          "29/04/2011",
          "/src/images/fast-and-furious-5.jpg",
          "https://www.youtube.com/watch?v=OqjeOYeG5_A",
        ),

        new Movie(
          "YS8INBNOTe",
          "Fast and Furious 6",
          "Action",
          false,
          "06/05/2013",
          "/src/images/fast-and-furious-6.jpg",
          "https://www.youtube.com/watch?v=C_puVuHoR6o",
        ),

        new Movie(
          "w6_nW_NAA2",
          "The Fast and the Furious: Tokyo Drift",
          "Action",
          false,
          "16/06/2006",
          "/src/images/fast-and-furious-3.jpg",
          "https://www.youtube.com/watch?v=p8HQ2JLlc4E",
        ),

        new Movie(
          "b8if75wW6O",
          "Furious 7",
          "Action",
          false,
          "03/04/2015",
          "/src/images/fast-and-furious-7.jpg",
          "https://www.youtube.com/watch?v=C_puVuHoR6o",
        ),

        new Movie(
          "_aGB09UvNV",
          "The Fate of the Furious",
          "Action",
          false,
          "14/04/2017",
          "/src/images/fast-and-furious-8.jpg",
          "https://www.youtube.com/watch?v=uisBaTkQAEs",
        ),

        new Movie(
          "f_A33vTJu8",
          "Fast & Furious Presents: Hobbs & Shaw",
          "Action",
          false,
          "02/08/2019",
          "/src/images/fast-and-furious-hobbs.jpg",
          " https://www.youtube.com/watch?v=HZ7PAyCDwEg",
        ),

        new Movie(
          "9h7vV2eVXG",
          "F9",
          "Action",
          false,
          "25/06/2021",
          "/src/images/fast-and-furious-9.jpg",
          "https://www.youtube.com/watch?v=fEE4RO-_jug",
        ),

        new Movie(
          "Wfx-U5Gst3",
          "Black Panther",
          "Action",
          false,
          "16/02/2018",
          "/src/images/black-panther.jpg",
          "https://www.youtube.com/watch?v=xjDjIWPwcPU",
        ),

        new Movie(
          "kMK4m9zQ9B",
          "Black Adam",
          "Action",
          true,
          "21/10/2022",
          "/src/images/black-adam.jpg",
          "https://www.youtube.com/watch?v=N73oTiIIJe0",
        ),

        new Movie(
          "9BFEgBKzKF",
          "Avatar 2",
          "Adventure",
          true,
          "16/12/2022",
          "/src/images/avatar-2.jpg",
          "https://www.youtube.com/watch?v=MknKGdvuYKo",
        ),

        new Movie(
          "fVmpautPP3",
          "Top Gun: Maverick",
          "Action",
          true,
          "27/05/2022",
          "/src/images/top-gun-2.jpg",
          "https://www.youtube.com/watch?v=qSqVVswa420",
        ),

        new Movie(
          "m6WxCSplRZ",
          "Halloween Ends",
          "Horror",
          true,
          "14/10/2022",
          "/src/images/halloween-ends.jpg",
          "https://www.youtube.com/watch?v=4c8OLrmejkY&vl=en",
        ),

        new Movie(
          "BeeOpckwFw",
          "Free Guy",
          "comedy",
          false,
          "13/08/2021",
          "/src/images/free-guy.jpg",
          "https://www.youtube.com/watch?v=X2m-08cOAbc",
        ),

        new Movie(
          "L9N64HhJXz",
          "The Wolf of Wall Street",
          "Drama",
          false,
          "25/12/2013",
          "/src/images/wolf-of-wallstreet.jpg",
          "https://www.youtube.com/watch?v=iszwuX1AK6A",
        ),

        new Movie(
          "jZzvMU7hP7",
          "Grown Ups",
          "comedy",
          false,
          "25/06/2010",
          "/src/images/grown-ups.jpg",
          "https://www.youtube.com/watch?v=e01NVCveGkg",
        ),

        new Movie(
          "ba-j126W2c",
          "The Transporter",
          "Action",
          false,
          "02/10/2002",
          "/src/images/transporter.jpg",
          "https://www.youtube.com/watch?v=0poXFSvX0_4",
        ),
      ], */

      visibleSlide: 0,
      userArray: [],
      username: "",
      comingSoon: [],
      watchList: []
    }
  },

  methods: {
    logout() {
      localStorage.removeItem(LOGGED_IN_USER_KEY);
      window.location.href = "../../index.html";
    },

    myListBtn() {
      window.location.href = "/src/pages/watch-list-page.html";
    },

    addToWatchList(index) {
      // if WATCH_LIST_KEY is empty
      if (!localStorage.getItem(WATCH_LIST_KEY)) {
        let watchListArray = [];
        watchListArray.push(this.availableList[index] && this.comingSoonList[index]);
        localStorage.setItem(
          WATCH_LIST_KEY,
          JSON.stringify(watchListArray)
        );
      } else {
        // if WATCH_LIST_KEY exits, get array and add movies to array
        let watchListArray = JSON.parse(
          localStorage.getItem(WATCH_LIST_KEY)
        );
        watchListArray.push(this.availableList[index] && this.comingSoonList[index]);
        localStorage.setItem(
          WATCH_LIST_KEY,
          JSON.stringify(watchListArray)
        );
      }
    },
  },

  computed: {
    comingSoonList() {
      return this.movieList.filter((movie) => {
        return movie.comingSoon === true;
      })
    },

    availableList() {
      return this.movieList.filter((movie) => {
        return movie.comingSoon === false;
      })
    },

  },


  template: /* html */
    `
  <nav class="nav">
    <div class="nav-small">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-override fluid" aria-label="Eleventh navbar example">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img class="netflix-logo" src="/src/images/netflix-logo-img.png" /></a>
            <button class="nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
              <img class="nav-icon" src="/src/images/menu-icon.png">
            </button>

            <div class="collapse navbar-collapse nav-list-div-override" id="navbarsExample09">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-list-override">
                <li class="nav-item nav-item-override">
                  <p class="user-name">User: {{username}}</p>
                </li>
                <li class="nav-item nav-item-override">
                  <button class="my-list-btn" @click="myListBtn">My Watch-List</button>
                </li>
                <li class="nav-item nav-item-override">
                  <button class="log-out" @click="logout">Log out!</button>
                </li>
              </ul>
            
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="nav-med">
      <img class="netflix-logo" src="/src/images/netflix-logo-img.png" />
      <ul class="nav-list">
        <li class="nav-list-item">
          <p class="user-name">{{username}}</p>
        </li>
        <li class="nav-list-item">
          <button class="my-list-btn" @click="myListBtn">Watch-List</button>
        </li>
        <li class="nav-list-item">
          <button class="log-out" @click="logout">Log out!</button>
        </li>
      </ul>
    </div>
  </nav>
 
    <br>
    <br>
    <br>
    <br>

    <header id="comingSoon-movie" class="comingSoon-movie">
    <iframe
    height="600"
    width="100%"
     class="hero-preview" src="/src/video/black-adam-hero-preview.mp4"></iframe>
   
      <h2>coming soon</h2>

      <div class="comingSoon-small">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          
          <div class="carousel-inner">
              <template v-for="(movie, index) in comingSoonList">
                  <div :class="{ 'carousel-item': true, active: index === 0 }" >
                      <img :src="movie.thumbnail" class="d-block w-10 h-10" :alt="movie.name">

                      <h3>{{movie.name}}</h3>
                      <p class="movie-info">{{movie.genre}}</p>
                      <p class="movie-info">
                        <button class="play-btn"><img class="play-icon" src="/src/images/play-icon.png"></button>
                        {{movie.availDate}}
                        <button class="add-btn" @click="addToWatchList(index)"><img class="add-icon" src="/src/images/add-icon.png"></button>  
                      </p>
                  </div>
                  
              </template>
          </div>
          
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>

          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="comingSoon-med">
        <ul class="comingSoon-list-med">
          <li class="comingSoon-movie-item-med" v-for="(movie, index) in comingSoonList" :key="movie.id">
            <div class="movie-thumbnail-container"></div>
              <img class="movie-img" v-bind:src="movie.thumbnail">
              <br/>
              <span class="movie-name">{{ movie.name }}</span>
              <br/>
              <span class="movie-info">{{ movie.genre }}</span>
              <br/>
              <span class="movie-info">{{ movie.availDate }}</span>
            </div>
          </li>
          </ul>
      </div>

    </header>

    <br>
    <br>
    <br>

    <section id="available-movie" class="available-movie">
        
      <h2>movies</h2>
      <div class="available-small">
        <div id="carouselExampleCaptions1" class="carousel slide" data-bs-ride="carousel">
        
          <div class="carousel-inner">
            <template v-for="(movie, index) in availableList">
                <div :class="{ 'carousel-item': true, active: index === 0 }" >
                    <img :src="movie.thumbnail" class="d-block  w-50 h-50 movie-img" :alt="movie.name">
                    <h3>{{ movie.name }}</h3>
                    <p class="movie-info">{{movie.genre}}</p>
                    <p class="movie-info">
                      <button class="play-btn"><img class="play-icon" src="/src/images/play-icon.png"></button>
                      {{movie.availDate}}
                      <button class="add-btn" @click="addToWatchList(index)"><img class="add-icon" src="/src/images/add-icon.png"></button>  
                    </p>
                  </div>
            </template>
          </div>
        
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>

          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="available-med">
        <ul class="available-list-med">
          <li class="available-movie-item-med" v-for="(movie, index) in availableList" :key="movie.id">
            <span class="movie-name">{{ movie.name }}</span>
            <br/>
            <img class="movie-img" v-bind:src="movie.thumbnail">
            <br/>
            <span class="movie-info">{{ movie.genre }}</span>
            <br/>
            <span class="movie-info">{{ movie.availDate }}</span>
          </li>
          </ul>
      </div>

    </section>

  <br>
  <br>
  <br>

    <footer>
        <div class="footer-grid">

          <p class="footer-grid-wrapper">Audio & Subtitles</p>
          <p class="footer-grid-wrapper">Help</p>
          <p class="footer-grid-wrapper">Gift Cards</p>

          <p class="footer-grid-wrapper">Terms of Use</p>
          <p class="footer-grid-wrapper">Privacy</p>
          <p class="footer-grid-wrapper">Cookies</p>
        
        </div>
        
        <p class="author">© 2022-2022 Michael Moore</p>

    </footer>
  
  
  `,
  mounted() {
    this.userArray = JSON.parse(localStorage.getItem(LOGGED_IN_USER_KEY));
    this.username = this.userArray[0]._username;
  },

}

window.addEventListener('DOMContentLoaded', () => {
  const app = createApp(component)
  app.mount("#home")
})
