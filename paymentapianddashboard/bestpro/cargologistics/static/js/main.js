// VARIABLE DECLARATION
 const body = document.querySelector('body');
const loginButton = document.getElementById('login');
const signupButton = document.getElementById('signup');
let loginOverlay = document.querySelector('#login-overlay');    
let logincloseButton = document.querySelector('.login-close-popup');
let signupOverlay = document.querySelector('#signup-overlay');
let signupCloseButton = document.querySelector('.signup-close-popup');
let signupFormLogo = document.querySelector('.formLogo');
let signupFormTitle = document.querySelector('.form-title');


// CODES TO GENERATE POPUPS
if (loginButton.innerHTML=="Log in") {
    loginButton.addEventListener("click", function(){
        loginOverlay.style.display = "flex";
    });
}else if(loginButton.innerHTML=="Logout") {
    loginButton.addEventListener("click", logout);
}

if (signupButton.innerHTML == "Sign up") {
    signupButton.addEventListener("click", function(){
        signupOverlay.style.display = "flex";
        signupFormLogo.classList.toggle("signupFormLogo");
        signupFormTitle.classList.toggle("signupFormTitle");
    });    
} else if(signupButton.innerHTML == "Sign up") {
    signupButton.addEventListener("click", userData);
}

//Close buttons
logincloseButton.addEventListener("click", function(){
    loginOverlay.style.display = "none";
});

signupCloseButton.addEventListener("click", function(){
    signupOverlay.style.display = "none";
});


function logout() {
    
}

function userData() {
    
}


/**
 * NAVIGATION
 */

const burgerButton = document.querySelector("#mobile");
const navigation = document.querySelector("#navigation");
const navigationMenuList = document.querySelector("#nav");
const authenticationButtons = document.querySelector("#authent");

burgerButton.addEventListener("click", function(){
    console.log("Bugger button clicked!");
    burgerButton.classList.toggle("crossed");
    navigation.classList.toggle("clicked");
    navigationMenuList.classList.toggle("display");
    authenticationButtons.classList.toggle("display");

});


// MULTI-STEPS FORM
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

var check = function() {
  if (document.getElementById('cpasswd').value ==
    document.getElementById('spasswd').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
  }
}