const {createApp} = window.Vue

const component = {

  data() {
      return {
          
      }
  },

  methods: {
      
  },

  computed:{

  },

  template: /* html */
  `
    <div>
        <form class=form>
            <h2>Create an Account!</h2>
            <br>
            <input id="userName" type="text" placeholder="User-Name" class="user-input">
            <br>
            <br>
            <input id="passWord" placeholder="Password" class="user-input">
            <br>
            <br>

            <button type="button" class="form-button">Create Account</button>
            <br>
            <br>
            <br>
            <p class="form-text">Have an account?<a href="/src/pages/login-page.html" class="form-link">Login!</a></p>
            
            <br>
            <br>
        </form>
    </div>
  `,


}

window.addEventListener('DOMContentLoaded',  () => {
    const app = createApp(component)
    app.mount("#sign-up")
} )