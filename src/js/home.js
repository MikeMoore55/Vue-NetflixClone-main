
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
            href="/src/images/Everest.jpg",
            "https://www.youtube.com/watch?v=5ZQVpPiOji0"
          ),

          new Movie(
            "zhfzHGhFjK",
            "The Fast and The Furious",
            "Action",
            "false",
            "22/06/2001",
            href="/src/images/fast-and-furious-1",
            "https://www.youtube.com/watch?v=GoSUdZJg3pw"
          ),

          new Movie(
            "TymNNADk_X",
            "2 Fast 2 Furious",
            "Action",
            "false",
            "06/06/2003",
            href="/src/images/fast-and-furious-2",
            "https://www.youtube.com/watch?v=ZZGkV_xWGw4",
          ),

          new Movie(
            "N7xyWhg0i",
            "Fast and Furious",
            "Action",
            "false",
            "12/03/2009",
            href="/src/images/fast-and-furious-4",
            "https://www.youtube.com/watch?v=BCg9R_MGZKg",
          ),

          new Movie(
            "vdPZEOGsEj",
            "Fast 5",
            "Action",
            "false",
            "29/04/2011",
            href="/src/images/fast-and-furious-5",
            "https://www.youtube.com/watch?v=OqjeOYeG5_A",
          ),

          new Movie(
            "YS8INBNOTe",
            "Fast and Furious 6",
            "Action",
            "true",
            "06/05/2013",
            href="/src/images/fast-and-furious-6",
            "https://www.youtube.com/watch?v=C_puVuHoR6o",
          ),

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
  
    <img class="netflix-logo" src="/src/images/netflix-logo-img.png">
    <div class="log-out-div">
      <p class="user-name">{{username}}</p>
      <button class="log-out" @click="logout">Log out!</button>
    </div>

    <div id="movieDisplay">
      <ul>
        <li v-for="(movie, index) in movieList" :key="movie.id">
        <span>{{ movie.name }}</span>
        <br/>
        <span>{{ movie.genre }}</span>
        <br/>
        <span>{{ movie.availDate }}</span>
        <br/>
        <img class="movie-img" v-bind:src="movie.thumbnail">
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