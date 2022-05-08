const LOGGED_IN_USER_KEY = "logged-in-user-storage-key";
const WATCH_LIST_KEY = "watch-list-storage-key";


const {createApp} = window.Vue

const component = {

  data() {
    return {
      userArray: [],
      username: "",
      search: "",
      watchListArray: [],
    };
  },

  methods: {
    removeFromWatchList(index) {
      this.watchListArray = JSON.parse(
        localStorage.getItem(WATCH_LIST_KEY)
      );
      this.watchListArray.splice(index, 1);
      localStorage.setItem(
        WATCH_LIST_KEY,
        JSON.stringify(this.watchListArray)
      );
    },

    homeBtn() {
      window.location.href = "/src/pages/home-page.html";
    },

    logout() {
      localStorage.removeItem(LOGGED_IN_USER_KEY);
      window.location.href = "../../index.html";
    },
  },

  computed: {
    filterWatchList() {
      return this.watchListArray.filter((movie) => {
        return movie.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },

  mounted() {
    this.userArray = JSON.parse(localStorage.getItem(LOGGED_IN_USER_KEY));
    this.username = this.userArray[0]._username;

    if (!localStorage.getItem(WATCH_LIST_KEY)) {
      let initArray = [];
      localStorage.setItem(WATCH_LIST_KEY, JSON.stringify(initArray));
    }

    this.watchListArray = JSON.parse(localStorage.getItem(WATCH_LIST_KEY));
  },


  template: /* html */
  `
  <div class="nav-small">
    <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-override fluid" aria-label="Eleventh navbar example">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img class="netflix-logo" src="/src/images/netflix-N-logo-img.png" /></a>
        <button class="nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <img class="nav-icon" src="/src/images/menu-icon.png">
        </button>

        <div class="collapse navbar-collapse nav-list-div-override" id="navbarsExample09">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-list-override">
            <li class="nav-item nav-item-override">
            <p class="user-name">
              <img class="user-pic" src="/src/images/user-icon.png">
              {{username}}
            </p>
            </li>
            <li class="nav-item nav-item-override">
            <button class="home" @click="homeBtn">Home</button>
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
      <img class="netflix-logo" src="/../images/netflix-N-logo-img.png" />
      <ul class="nav-list">
        <li class="user-item">
          <p class="user-name">
          <img class="user-pic" src="/../images/user-icon.png">
          {{username}}
          </p>
        </li>
        <li class="nav-list-item">
          <button class="home" @click="homeBtn">Home</button>
        </li>
        <li class="nav-list-item">
          <button class="log-out" @click="logout">Log out!</button>
        </li>
      </ul>
    </div>

<section class="main">
  <h1 class="list-heading">My List</h1>

  <div class="search-container"> 
    <img class="search-img" src="/src/images/search-icon.png">
    <input type="text" v-model="search" class="search" placeholder="Search My Movies">
  </div>

  <ul class="movie-list">
    <li class="movie-item" v-for="(movie, index) in filterWatchList" :key="movie.id"> 
      <span class="movie-name">{{ movie.name }}</span>
      <br/>
      <img class="movie-img" v-bind:src="movie.thumbnail">
      <br/>
      <span class="movie-info">{{ movie.genre }}</span>
      <br/>
      <span class="movie-info">{{ movie.availDate }}</span>
      <br/>
      
      <div class="buttons">
        <button class="preview-btn">
        <a :href="movie.preview">
        <img class="preview-icon" src="/../images/preview-icon.png"/>
        </a>
        </button>
        <button class="remove-btn" @click="removeFromWatchList(index)">
        <img class="remove-icon" src="/../images/cancel-icon.png">
        </button>
        </div>   
    </li>
  </ul>
</section>

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
}

window.addEventListener('DOMContentLoaded',  () => {
    const app = createApp(component)
    app.mount("#watch-list")
} )