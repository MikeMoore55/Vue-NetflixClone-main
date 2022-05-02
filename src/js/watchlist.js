const LOGGED_IN_USER_KEY = "logged-in-user-storage-key";

const {createApp} = window.Vue

const component = {

  data() {
      return {
         userName:"" 
      }
  },

  methods: {

    logout() {
        localStorage.removeItem(LOGGED_IN_USER_KEY);
        window.location.href = "../../index.html";
      },

      homeBtn(){
        window.location.href = "/src/pages/home-page.html";
      }
  },

  computed:{

  },

  template: /* html */
  `
  <div class="nav">
      <img class="netflix-logo" src="/src/images/netflix-logo-img.png">
      <div class="log-out-div">
        <p class="user-name">{{username}}</p>
        <button class="home" @click="homeBtn">Home</button>
        <button class="log-out" @click="logout">Log out!</button>
      </div>
    </div>
  
  `,

  mounted() {
    this.userArray = JSON.parse(localStorage.getItem(LOGGED_IN_USER_KEY));
    this.username = this.userArray[0]._username;
  },

}

window.addEventListener('DOMContentLoaded',  () => {
    const app = createApp(component)
    app.mount("#watch-list")
} )