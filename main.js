
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

function toggleForms(form) {
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("login-form").classList.add("hidden");

    if (form === 'signup') {
        document.getElementById("signup-form").classList.remove("hidden");
    } else {
        document.getElementById("login-form").classList.remove("hidden");
    }
}

function signup() {
    let username = document.getElementById("signup-username").value
    let password = document.getElementById("signup-password").value
    let valid = true;

    document.getElementById("signup-username-error").innerText = "";
    document.getElementById("signup-password-error").innerText = "";

    if (username.length <= 4) {
        document.getElementById("signup-username-error").innerText = "Username must be longer than 4 characters.";
        valid = false;
    }

    if (password.length <= 3) {
        document.getElementById("signup-password-error").innerText = "Password must be longer than 3 characters.";
        valid = false;
    }

    if (valid) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        toggleForms("login-form");
    }
}

function login() {
    let username = document.getElementById("login-username").value
    let password = document.getElementById("login-password").value
    let errorDiv = document.getElementById("login-error");

    errorDiv.innerText = "";

    if (username != localStorage.getItem("username") || password != localStorage.getItem("password")) {
        errorDiv.innerText = "Invalid username or password.";
    } else {

        window.location.href = "./home.html";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const usernameDisplay = document.getElementById("user-name");
    if (usernameDisplay && localStorage.getItem("username")) {
        usernameDisplay.innerText = `${localStorage.getItem("username")}`;
        document.getElementById("profile-name").innerText = `Uesrname : ${localStorage.getItem("username")}`;
        document.getElementById("profile-password").innerText = `Password : ${localStorage.getItem("password")}`;
    }
});
function guest() {
    localStorage.setItem("username", "guest");
    localStorage.setItem("password", "guest");
    window.location.href = "./home.html";
}
function logout() {
    window.location.href = "./index.html";
}


function addEvent() {
    if (localStorage.getItem("username") == "guest") {
        alert("You cannot add events as a guest user. Please log in to add events.");
        return;
    } else {
        let events = document.getElementById("events");
        let divContainerEvent = document.createElement("div");
        divContainerEvent.classList.add("container-event");
        events.appendChild(divContainerEvent);
        let divImgContainer = document.createElement("div");
        divImgContainer.classList.add("img-container");
        let img = document.createElement("img");
        img.src = document.getElementById("event-image-url").value;
        img.alt = "Image";
        divContainerEvent.appendChild(divImgContainer);
        let divTextContainer = document.createElement("div");
        divTextContainer.classList.add("text-container");
        divContainerEvent.appendChild(divTextContainer);
        let h1 = document.createElement("h1");
        h1.innerText = document.getElementById("event-title").value;
        divTextContainer.appendChild(h1);
        let span = document.createElement("span");
        span.innerText = `  -  ${document.getElementById("event-date").value}`
        span.classList.add("date");
        h1.appendChild(span);
        let p = document.createElement("p");
        p.innerText = document.getElementById("event-description").value;
        divTextContainer.appendChild(p);
    }
}