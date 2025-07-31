
class Person {
    constructor(fullName, email, password) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }
}
let users = JSON.parse(localStorage.getItem("users")) || [];
// account info
let userAccountName = document.getElementById("user-info-name")
let userAccountEmail = document.getElementById("user-info-email")




// register page code
function registerUser(event) {
    event.preventDefault();
    let fullName = document.getElementById("full-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!fullName || !email || !password) {
        alert("Please fill all the fields");;
        return;
    }

    let usersFromStorage = JSON.parse(localStorage.getItem("users")) || [];
    let existingUsers = usersFromStorage.find((element) => element.email === email);


    if (existingUsers) {
        alert("Users already exist with this email")
        return
    } else {
        let newUser = new Person(fullName, email, password)
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))

        alert("User Registered Successfully");

        event.target.reset();
        window.location.href = "./index.html";
    }
}

// login page code

function loginUser(event) {
    event.preventDefault();
    let userEmail = document.getElementById("user-email").value;
    let userPassword = document.getElementById("user-password").value;

    let usersFromStorage = JSON.parse(localStorage.getItem("users"))
    let existingUsers = usersFromStorage.find((element) => element.email === userEmail)

    if (existingUsers && existingUsers.password === userPassword) {
        alert("loggedIn Successfully")
        localStorage.setItem("loggedInUser", JSON.stringify(existingUsers))

        window.location.href = "./main-page/index.html";
    } else {
        alert("Invalid credentials")
    }
}


// Display user info on products page
window.onload = function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const userAccountName = document.getElementById("user-info-name");
    const userAccountEmail = document.getElementById("user-info-email");

    if (loggedInUser && userAccountName && userAccountEmail) {
        userAccountName.innerHTML = loggedInUser.fullName;
        userAccountEmail.innerHTML = loggedInUser.email;
    }
};


// eye icon
function togglePassword() {
    let password = document.getElementById("password");
    let eyeIcon = document.getElementById("eye-icon")
    let eyeSlashIcon = document.getElementById("eye-slash-icon")

    const isPasswordHidden = password.type === "password";

    password.type = isPasswordHidden ? "text" : "password";
    eyeIcon.style.display = isPasswordHidden ? "none" : "block";
    eyeSlashIcon.style.display = isPasswordHidden ? "block" : "none";

}
function togglePasswordLogin() {
    let password = document.getElementById("user-password");
    let eyeIcon = document.getElementById("eye-icon")
    let eyeSlashIcon = document.getElementById("eye-slash-icon")

    const isPasswordHidden = password.type === "password";

    password.type = isPasswordHidden ? "text" : "password";
    eyeIcon.style.display = isPasswordHidden ? "none" : "block";
    eyeSlashIcon.style.display = isPasswordHidden ? "block" : "none";

}


// function logout() {
//     localStorage.removeItem("loggedInUser");
//     alert("Logged out successfully");
//     window.location.href = "index.html";
// }


// fetch data from API and display products

