
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
}

const LOGGED_IN_USER_KEY = "logged-in-user-storage-key";

const {createApp} = window.Vue;


const component = {

  data() {
      return {
        movieList:[
          new Movie(
            "pi8HsKXN5G",
            "Everest",
            "Adventure",
            "false",
            "18/09/2015",
            "/src/images/Everest.jpg",
            "https://www.youtube.com/watch?v=5ZQVpPiOji0"
          ),

          new Movie(
            "zhfzHGhFjK",
            "The Fast and The Furious",
            "Action",
            "false",
            "22/06/2001",
            "/src/images/fast-and-furious-1.jpg",
            "https://www.youtube.com/watch?v=GoSUdZJg3pw"
          ),

          new Movie(
            "TymNNADk_X",
            "2 Fast 2 Furious",
            "Action",
            "false",
            "06/06/2003",
            "/src/images/fast-and-furious-2.jpg",
            "https://www.youtube.com/watch?v=ZZGkV_xWGw4",
          ),

          new Movie(
            "N7xyWhg0i",
            "Fast and Furious",
            "Action",
            "false",
            "12/03/2009",
            "/src/images/fast-and-furious-4.jpg",
            "https://www.youtube.com/watch?v=BCg9R_MGZKg",
          ),

          new Movie(
            "vdPZEOGsEj",
            "Fast 5",
            "Action",
            "false",
            "29/04/2011",
            "/src/images/fast-and-furious-5.jpg",
            "https://www.youtube.com/watch?v=OqjeOYeG5_A",
          ),

          new Movie(
            "YS8INBNOTe",
            "Fast and Furious 6",
            "Action",
            "false",
            "06/05/2013",
            "/src/images/fast-and-furious-6.jpg",
            "https://www.youtube.com/watch?v=C_puVuHoR6o",
          ),

          new Movie(
            "w6_nW_NAA2",
            "The Fast and the Furious: Tokyo Drift",
            "Action",
            "false",
            "16/06/2006",
            "/src/images/fast-and-furious-3.jpg",
            "https://www.youtube.com/watch?v=p8HQ2JLlc4E",
          ),

          new Movie(
            "b8if75wW6O",
            "Furious 7",
            "Action",
            "false",
            "03/04/2015",
            "/src/images/fast-and-furious-7.jpg",
            "https://www.youtube.com/watch?v=C_puVuHoR6o",
          ),

          new Movie(
            "_aGB09UvNV",
            "The Fate of the Furious",
            "Action",
            "false",
            "14/04/2017",
            "/src/images/fast-and-furious-8.jpg",
            "https://www.youtube.com/watch?v=uisBaTkQAEs",
          ),
          
          new Movie(
            "f_A33vTJu8",
            "Fast & Furious Presents: Hobbs & Shaw",
            "Action",
            "false",
            "02/08/2019",
            "/src/images/fast-and-furious-hobbs.jpg",
            " https://www.youtube.com/watch?v=HZ7PAyCDwEg",
          ),

          new Movie (
            "9h7vV2eVXG",
            "F9",
            "Action",
            "false",
            "25/06/2021",
            "/src/images/fast-and-furious-9.jpg",
            "https://www.youtube.com/watch?v=fEE4RO-_jug",
          ),
          /* finish list */
        ],
        userArray: [],
        username: "",
      }
  },

  methods: {
    logout() {
      localStorage.removeItem(LOGGED_IN_USER_KEY);
      window.location.href = "../../index.html";
    },
  },

  computed:{
    comingSoonList() {
      return this.movieList.filter((movie) => {
        return movie.comingSoon===true;
      });
    },
  },

  template: /* html */
  `
    <div class="header">
      <img class="netflix-logo" src="/src/images/netflix-logo-img.png">
      <div class="log-out-div">
        <p class="user-name">{{username}}</p>
        <button class="log-out" @click="logout">Log out!</button>
      </div>
    </div>

    <div id="movieDisplay" class="movie-display">
      <ul class="movie-list">
        <li v-for="(movie, index) in movieList" :key="movie.id">
        <img class="movie-img" v-bind:src="movie.thumbnail">
        <br/>
        <div class="movie-info-section">
          <span class="movie-name">{{ movie.name }}</span>
          <br/>
          <span class="movie-info">{{ movie.genre }}</span>
          <br/>
          <span class="movie-info">{{ movie.availDate }}</span>
          </div>
        </li>
      </ul>
    </div>
  
  
  `,
  mounted() {
    this.userArray = JSON.parse(localStorage.getItem(LOGGED_IN_USER_KEY));
    this.username = this.userArray[0]._username;
  },

}

window.addEventListener('DOMContentLoaded',  () => {
    const app = createApp(component)
    app.mount("#home")
} )