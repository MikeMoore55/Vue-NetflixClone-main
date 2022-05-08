/* movie and series classes */
import { MovieList } from "../classes/movie-list.js";
import { SeriesList } from "../classes/series-list.js";


/* local storage keys */
const LOGGED_IN_USER_KEY = "logged-in-user-storage-key";
const WATCH_LIST_KEY = "watch-list-storage-key";

/* ---- vue ---- */

const { createApp } = window.Vue;

const component = {

  data() {
    return {
      movieList: MovieList,
      seriesList: SeriesList,
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

    /* when button is clicked add the movie to watch-list */
    myListBtn() {
      window.location.href = "../src/pages/watch-list-page.html";
    },

    addToWatchList(index) {
      if (!localStorage.getItem(WATCH_LIST_KEY)) {
        let watchListArray = [];
        watchListArray.push(this.availableList[index]);
        localStorage.setItem(
          WATCH_LIST_KEY,
          JSON.stringify(watchListArray)
        );
      } else {
        let watchListArray = JSON.parse(
          localStorage.getItem(WATCH_LIST_KEY)
        );
        watchListArray.push(this.availableList[index]);
        localStorage.setItem(
          WATCH_LIST_KEY,
          JSON.stringify(watchListArray)
        );
      }
    },
  },

  computed: {
    /* computed property for movies coming-soon */
    comingSoonList() {
      return this.movieList.filter((movie) => {
        return movie.comingSoon === true;
      })
    },

    /* computed property for movies available */
    availableList() {
      return this.movieList.filter((movie) => {
        return movie.comingSoon === false;
      })
    },

  },

  /*
  ---note---
  
  -> nav-small= bootstrap nav when screen is smaller than 570px
  -> nav med= nav when screen is bigger than 570px
  
  -> comingSoon-small & available-small & series small = bootstrap carousel for screens smaller thank 570px
  -> comingSoon-med & available-med & series med = grid display for screens bigger thank 570px
  
  i made it so small items display none when screen exceeds 570px and med displays block, and works the other way round.
  */

  /* html code template */
  template: /* html */
    `
  <nav class="nav">
    <div class="nav-small">
      <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-override fluid" aria-label="Eleventh navbar example">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img class="netflix-logo" src="../images/netflix-N-logo-img.png" /></a>
          <button class="nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <img class="nav-icon" src="../images/menu-icon.png">
          </button>

          <div class="collapse navbar-collapse nav-list-div-override" id="navbarsExample09">
            
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-list-override">
              
              <li class="nav-item nav-item-override">
                <p class="user-name">
                <img class="user-pic" src="../images/user-icon.png">
                {{username}}
                </p>
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
      <img class="netflix-logo" src="../images/netflix-N-logo-img.png" />
      <ul class="nav-list">
        <li class="user-item">
          <p class="user-name">
          <img class="user-pic" src="../images/user-icon.png">
          {{username}}
          </p>
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

  <section class="movie-preview">
    <video class="movie-video" autoplay muted loop>
      <source src="../video/black-adam-hero-preview.mp4" type="video/mp4">
    </video>
    <div class="hero-info">
      <img src="../images/black-adam.jpg" alt="black-adam">
      <h1>Black Adam</h1>
      <h3>Coming Soon!</h3>
      <h4>21/10/2022</h4>
    </div>
  </section>
  
  <header id="myHeader" class="header">

    <div class="search-container"> 
      <img class="search-img" src="../images/search-icon.png">
      <input type="text" class="search" placeholder="Search Movies">
    </div>

    <h2>coming soon</h2>

    <div class="comingSoon-small">
    <div class="overlay">
      <h6> coming-soon </h6>
    </div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">  
        <div class="carousel-inner">
          <template v-for="(movie, index) in comingSoonList">
            
              <div :class="{ 'carousel-item': true, active: index === 0 }">
            
                <img :src="movie.thumbnail" class="d-block w-10 h-10" :alt="movie.name"/>

                <h3>{{movie.name}}</h3>
                <p class="movie-info">{{movie.genre}}</p>
                <p class="movie-info">
                  {{movie.availDate}}
                </p>                   
                <button class="comingSoon-play-btn">
                  <a :href="movie.preview">
                  <img class="play-icon" src="../images/preview-icon.png">
                  </a>
                </button>
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
      <div class="overlay">
        <h6> coming-soon </h6>
      </div>
        <li class="comingSoon-movie-item-med" v-for="(movie, index) in comingSoonList" :key="movie.id">
              
          <img class="movie-img" v-bind:src="movie.thumbnail">
          <br/>
          <div class="movie-content">
            <span class="movie-name">{{ movie.name }}</span>
            <br/>
            <span class="movie-info">{{ movie.genre }}</span>
            <br/>
            <span class="movie-info">{{ movie.availDate }}</span>

            <div class="comingSoon-buttons">
              <button class="comingSoon-preview-btn">
              <a :href="movie.preview">
              <img class="comingSoon-preview-icon" src="../images/preview-icon.png"/>
              </a>
              </button>
            </div>
          </div>
              
        </li>
      </ul>
    </div>

  </header>

  <section id="my-main" class="main">
        
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
                <button class="play-btn">
                <a :href="movie.preview">
                <img class="play-icon" src="../images/preview-icon.png">
                </a>
                </button>
                  {{movie.availDate}}
                <button class="add-btn" @click="addToWatchList(index)"><img class="add-icon" src="../images/add-icon.png"></button>  
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

   
    <div class="series-small">
      <h2>Series</h2>
      <div id="carouselExampleCaptions2" class="carousel slide" data-bs-ride="carousel">
        
        <div class="carousel-inner">
            <template v-for="(series, index) in seriesList">
              <div :class="{ 'carousel-item': true, active: index === 0 }" >
                <img :src="series.thumbnail" class="d-block  w-50 h-50 movie-img" :alt="series.name">
                <h3>{{ series.name }}</h3>
                <p class="movie-info">{{series.genre}}</p>
                <p class="movie-info">
                  {{series.seasons}}
                </p>                
                <button class="series-play-btn">
                  <a :href="series.preview">
                  <img class="play-icon" src="../images/preview-icon.png">
                  </a>
                </button>
              </div>
           </template>
        </div>
        
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div class="available-med">
      <div class="all-movies"></div>
        <ul class="available-list-med">
          <li class="available-movie-item-med" v-for="(movie, index) in availableList" :key="movie.id">

            <img class="movie-img" v-bind:src="movie.thumbnail">
            <br/>
            <div class="movie-content">
              <span class="movie-name">{{ movie.name }}</span>
              <br/>
              <span class="movie-info">{{ movie.genre }}</span>
              <br/>
              <span class="movie-info">{{ movie.availDate }}</span>
              
              <div class="buttons">
                <button class="preview-btn">
                  <a :href="movie.preview">
                  <img class="preview-icon" src="../images/preview-icon.png"/>
                  </a>
                </button>
                <button class="add-btn" @click="addToWatchList(index)">
                  <img class="add-icon" src="../images/add-icon.png"/>
                </button>
              </div>
            </div>

          </li>
        </ul>
      </div>
      
      <div class="series-med">
        <h2>Series</h2>
        <ul class="series-list">
          <li class="series-item" v-for="(series, index) in seriesList" :key="series.id">
            
            <img class="series-img" v-bind:src="series.thumbnail">
            <br/>
            <div class="series-content">
              <span class="series-name">{{ series.name }}</span>
              <br/>
              <span class="series-info">{{ series.genre }}</span>
              <br/>
              <span class="series-info">{{ series.seasons }}</span>


              <div class="series-buttons">
              <button class="preview-btn">
              <a :href="series.preview">
              <img class="preview-icon" src="../images/preview-icon.png"/>
              </a>
              </button>
              </div>
            </div>
            
          </li>
        </ul>
      </div>
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
  /*end html */

  mounted() {
    this.userArray = JSON.parse(localStorage.getItem(LOGGED_IN_USER_KEY));
    this.username = this.userArray[0]._username;
  },

}

window.addEventListener('DOMContentLoaded', () => {
  const app = createApp(component)
  app.mount("#home")
})



