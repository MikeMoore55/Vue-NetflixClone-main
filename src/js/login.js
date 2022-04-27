/*************************
 * VARIABLES
 *************************/

 const form = document.querySelector("#login-form");
 const inputUsername = document.querySelector("#user-name");
 const inputPassword = document.querySelector("#password");
 
 const LOGGED_IN_USER_KEY = "logged-in-user-storage-key";
 let userArray = [];
 
//----class----
 
 class User {
   constructor(username, password) {
     this._username = username;
     this._password = password;
   }
   get username() {
     return this._username;
   }
 
   get password() {
     return this._password;
   }
 }
 
//----event listeners----
 
 form.addEventListener("submit", function (event) {
   event.preventDefault();
   loggedInUser(inputUsername.value, inputPassword.value);
   window.location.href = "/src/pages/home-page.html";
 });
 
//----event listeners----

 function loggedInUser(username, email, password) {
   if (username !== "" && password !== "") {
     let loggedInUser = new User(username, password);
     userArray.push(loggedInUser);
     addToLocalStorage(userArray);
   }
 }
 
 /*************************
  * LOCAL STORAGE
  *************************/
 
 function addToLocalStorage(userArray) {
   userArray = JSON.stringify(userArray);
   localStorage.setItem(LOGGED_IN_USER_KEY, userArray);
   // userArray = JSON.parse(localStorage.getItem(LOGGEDIN_USER_KEY))
 }