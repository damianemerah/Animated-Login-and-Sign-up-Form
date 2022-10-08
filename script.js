const signUpBtn = document.querySelector(".sign-up__btn");
const signInBtn = document.querySelector(".sign-in__btn");
const signupBox = document.querySelector(".form__box--signup");
const loginBox = document.querySelector(".form__box--login");

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signupBox.classList.add("form__signup-anim");
  loginBox.classList.remove("form__login-anim");
});

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signupBox.classList.remove("form__signup-anim");
  loginBox.classList.add("form__login-anim");
});
