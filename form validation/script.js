const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//functions
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small')
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success';
}

 function isValid(email) {
  const re = /([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
  return re.test(String(email).toLowerCase());
 }

 function checkRequire(arr) {
  arr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${input.id}. is required`)
    } else {
      showSuccess(input)
    }
  })
 }

//event listeners
form.addEventListener('submit', (e)=> {
  e.preventDefault();

checkRequire([email,username,password,password2])


  // if (username.value === '') {
  //   showError(username, 'Username is required');
  // } else {
  //   showSuccess(username);
  // }

  //   if (email.value === '') {
  //   showError(email, 'Email is required');
  // } else if (!isValid(email.value)) {
  //   showError(email, 'Email is not valid');
  // } else {
  //   showSuccess(email);
  // }

  //   if (password.value == '') {
  //   showError(password, 'password is required');
  // } else {
  //   showSuccess(password);
  // }

  //    if (password2.value == '') {
  //   showError(password2, 'password 2 is required');
  // } else {
  //   showSuccess(password2);
  // }
});
