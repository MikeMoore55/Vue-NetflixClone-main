
import { MovieList } from "../classes/movie-list.js";

const LOGGED_IN_USER_KEY = "logged-in-user-storage-key";
const WATCH_LIST_KEY = "watch-list-storage-key";


const { createApp } = window.Vue;


const component = {

  data() {
    return {
      movieList: MovieList,
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
      if (!localStorage.getItem(WATCH_LIST_KEY)) {
        let watchListArray = [];
        watchListArray.push(this.availableList[index] && this.comingSoonList[index]);
        localStorage.setItem(
          WATCH_LIST_KEY,
          JSON.stringify(watchListArray)
        );
      } else {
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
    class="hero-preview" 
    src="/src/video/black-adam-hero-preview.mp4">
    </iframe>
   
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
            
              <img class="movie-img" v-bind:src="movie.thumbnail">
              <br/>
              <span class="movie-name">{{ movie.name }}</span>
              <br/>
              <span class="movie-info">{{ movie.genre }}</span>
              <br/>
              <span class="movie-info">{{ movie.availDate }}</span>
            
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
            <img class="movie-img" v-bind:src="movie.thumbnail">
            <br/>
            <h3>{{ movie.name }}</h3>
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
        
        <p class="author">?? 2022-2022 Michael Moore</p>

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
