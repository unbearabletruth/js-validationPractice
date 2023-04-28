const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zipCode = document.querySelector("#zipCode");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#passwordConfirmation");
const submit = document.querySelector("#submitButton");
const form = document.querySelector("form");


function checkEmail(email) {
  const emailError = document.querySelector("#emailError");
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value === ""){
        emailError.textContent = "You have to enter Email!"
        email.setCustomValidity(" ");
        email.reportValidity();
        return false;
    } else if (email.value.length < 5){
        emailError.textContent = "At least 5 characters needed!"
        email.setCustomValidity(" ");
        email.reportValidity();
        return false;
    } else  if (email.value.match(validEmail)) {
        emailError.textContent = "";
        email.setCustomValidity("");
        email.reportValidity();
        return true; 
    } else {
        emailError.textContent = "Invalid email address!"
        email.setCustomValidity(" ");
        email.reportValidity();
      return false;
    }
  }

function checkCountry(country) {
  const countryError = document.querySelector("#countryError");
      if (country.value === ""){
      countryError.textContent = "You have to enter Country!"
      country.setCustomValidity(" ");
      country.reportValidity();
      return false;
    } else {
      countryError.textContent = "";
      country.setCustomValidity("");
      country.reportValidity();
      return true;
    }
}

function checkZipCode(zipCode) {
  const zipCodeError = document.querySelector("#zipCodeError");
  const validZipCode = /^[0-9]{5}(?:-[0-9]{4})?$/;
  if (zipCode.value === ""){
    zipCodeError.textContent = "You have to enter Zip Code!"
    zipCode.setCustomValidity(" ");
    zipCode.reportValidity();
    return false;
  }else if (zipCode.value.match(validZipCode)){
    zipCodeError.textContent = "";
    zipCode.setCustomValidity("");
    zipCode.reportValidity();
    return true;
  } else {
    zipCodeError.textContent = "Invalid Zip Code!";
    zipCode.setCustomValidity(" ");
    zipCode.reportValidity();
    return false;
  }
} 

function checkPassword(password) {
  const passwordError = document.querySelector("#passwordError");
  const validPassoword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
  if (password.value === ""){
    passwordError.textContent = "You have to enter Password!";
    password.setCustomValidity(" ");
    password.reportValidity();
    return false;
  }else if (password.value.match(validPassoword)){
    passwordError.textContent = "";
    password.setCustomValidity("");
    password.reportValidity();
    return true;
  }else {
    passwordError.textContent = "Number, uppercase, lowercase, 8-32 characters";
    password.setCustomValidity(" ");
    password.reportValidity();
    return false;
  }
}

function checkPasswordConfirmation(password, passwordConfirmation) {
  const passwordConfirmationError = document.querySelector("#passwordConfirmationError");
  if (password.value !== passwordConfirmation.value){
    passwordConfirmationError.textContent = "Passwords don't match!"
    return false;
  } else if (passwordConfirmation.value === ""){
    passwordConfirmationError.textContent = "You have to confirm Password!"
    passwordConfirmation.setCustomValidity(" ");
    passwordConfirmation.reportValidity();
    return false;
  }
  else {
    passwordConfirmationError.textContent = "";
    passwordConfirmation.setCustomValidity("");
    passwordConfirmation.reportValidity();
    return true;
  }
}

form.addEventListener("submit", (e) => {
  if (checkEmail(email) === false || checkCountry(country) === false ||
      checkZipCode(zipCode) === false || checkPassword(password) === false ||
      checkPasswordConfirmation(passwordConfirmation) === false){
   
    checkEmail(email);
    checkCountry(country);
    checkZipCode(zipCode);
    checkPassword(password);
    checkPasswordConfirmation(password, passwordConfirmation);
    e.preventDefault();
  }
})

email.addEventListener("input", () => {
    checkEmail(email);
})

country.addEventListener("input", () => {
  checkCountry(country);
})

zipCode.addEventListener("input", () => {
  checkZipCode(zipCode);
})

password.addEventListener("input", () => {
  checkPassword(password);
  checkPasswordConfirmation(password, passwordConfirmation);
})

passwordConfirmation.addEventListener("input", () => {
  checkPasswordConfirmation(password, passwordConfirmation);
})