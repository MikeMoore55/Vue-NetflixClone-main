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
        <form>
            <h2>Create an Account!</h2>
            <label for="userName">UserName:</label>
            <br>
            <input id="userName" type="text">
            <br>
            <label for="passWord">Password:</label>
            <br>
            <input id="passWord">
            <br>
            <p>Don't have an account?</p>
            <a>create one!</a>
        </form>
    </div>
  `,


}

window.addEventListener('DOMContentLoaded',  () => {
    const app = createApp(component)
    app.mount("#sign-up")
} )