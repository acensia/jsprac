const h1 = document.querySelector(".hihello:first-child h1")

console.log(h1);

h1.innerText = "Here I am2";

function handleTitleClick(){
    h1.classList.toggle("clicked");
    
}


h1.addEventListener("click", handleTitleClick);

// button
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    if(username === ""){
        alert("Type your name");
    } else if(username.length > 16){
        alert("Too long name");
    }
}

loginButton.addEventListener("click", onLoginBtnClick);
