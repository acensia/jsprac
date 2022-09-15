const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");
//const loginBtn = document.querySelector("#login-form button");

const link = document.querySelector("a");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLogoutSubmit_diy(event){
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASS);
    greeting.classList.add(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
    logoutForm.classList.add(HIDDEN_CLASS);
}

function logout_diy(){
    logoutForm.addEventListener("click", onLogoutSubmit_diy);
}

function showGreetings(savedUsername){
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Hello ${savedUsername}`;
    logoutForm.classList.remove(HIDDEN_CLASS);
    logout_diy();
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    showGreetings(username);
}


function handleLinkClick(event){
//    event.preventDefault();
    alert("letz giri");
}

link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    showGreetings(savedUsername);
}