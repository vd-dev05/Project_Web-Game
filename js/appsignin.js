const forms = document.querySelector(".check_form");
const userNameElement = document.querySelector("#username");
const emailElement = document.querySelector("#email");
const passwordElement = document.querySelector("#password");
const repasswordInput = document.querySelector("#re-password");

userNameElement.addEventListener("blur", validateUsername);
emailElement.addEventListener("blur", validateEmail);
passwordElement.addEventListener("blur", validatePassword);
repasswordInput.addEventListener("blur", validateRePassword);

const reSpaces = /^\S*$/;
const re6 = /^\S{6,}$/;
const rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const reEmail = /^\S+@\S+\.\S+$/;

let users = JSON.parse(localStorage.getItem("users")) || [];
let user = {
  userName: "",
  email: "",
  password: "",
};

function validateUsername(e) {
  if (reSpaces.test(userNameElement.value) && re6.test(userNameElement.value)) {
    userNameElement.classList.remove("is-invalid");
    userNameElement.classList.add("is-valid");
    return true;
  } else {
    userNameElement.classList.remove("is-valid");

    userNameElement.classList.add("is-invalid");
    return false;
  }
}

function validateEmail() {
  if (reSpaces.test(emailElement.value) && reEmail.test(emailElement.value)) {
    emailElement.classList.remove("is-invalid");
    emailElement.classList.add("is-valid");

    return true;
  } else {
    emailElement.classList.add("is-invalid");
    emailElement.classList.remove("is-valid");

    return false;
  }
}

function validatePassword() {
  if (
    rePassword.test(passwordElement.value) &&
    reSpaces.test(passwordElement.value)
  ) {
    passwordElement.classList.remove("is-invalid");
    passwordElement.classList.add("is-valid");
    return true;
  } else {
    passwordElement.classList.add("is-invalid");
    passwordElement.classList.remove("is-valid");
    return false;
  }
}

function validateRePassword() {
  if (passwordElement.value == repasswordInput.value) {
    repasswordInput.classList.remove("is-invalid");
    repasswordInput.classList.add("is-valid");
    return true;
  } else {
    repasswordInput.classList.add("is-invalid");
    repasswordInput.classList.remove("is-valid");
    return false;
  }
}

forms.addEventListener("submit", function (event) {
  if (
    !forms.checkValidity() ||
    !validateEmail() ||
    !validateUsername() ||
    !validatePassword() ||
    !validateRePassword()
  ) {
    event.preventDefault();
  } else {
    event.preventDefault();
    let userLocal = JSON.parse(localStorage.getItem("users")) || [];
    let isCheckUserName = userLocal.some(
      (user) => user.userName === userNameElement.value
    );
    let isCheckMail = userLocal.some(
      (user) => user.email === emailElement.value
    );
    if (!isCheckUserName && !isCheckMail) {
      alert("Đăng Kí Thành công");
      user = {
        ...user,
        userName: userNameElement.value,
        password: passwordElement.value,
        email: emailElement.value,
      };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      window.location.href = "../login.html";
    } else {
      alert("Email or Username already exists");
    }
  }
});
const toggleButtons = document.querySelectorAll(".toggle-password");
const passwordInputs = document.querySelectorAll(".password-input");

toggleButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    if (passwordInputs[index].type === "password") {
      passwordInputs[index].type = "text";
    } else {
      passwordInputs[index].type = "password";
    }
  });
});

console.log(user)