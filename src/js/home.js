
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
            
          )

        ],
        userArray: [],
        username: "",
      }
  },

  methods: {
      
  },

  computed:{

  },

  template: /* html */
  `
  
    <img class="netflix-logo" src="/src/images/netflix-logo-img.png">
    <div class="log-out-div">
      <p class="user-name">{{username}}</p>
      <button class="log-out">Log out!</button>
    </div>

    <div id="hero" class="hero-header">
      <h1>Coming soon!</h1>
      <br>
      <br>
      <br>
      <br>
      <p>upcoming movies will be displayed here soon...</p>

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