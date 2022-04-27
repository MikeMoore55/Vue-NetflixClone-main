const {createApp} = window.Vue

const LOGGED_IN_USER_KEY = "logged-in-user-storage-key";


const component = {

  data() {
      return {
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