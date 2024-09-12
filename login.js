const form = document.querySelector('#button');
const username = document.querySelector('#name');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const cpass = document.querySelector('#cpass');

form.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateInputs()) {
        window.location.href = "home.html"; 
    }
});

function validateInputs() {
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passval = pass.value.trim();
    const cpassval = cpass.value.trim();

    let isValid = true;

    if (usernameval === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailval === '') {
        setError(email, 'Enter an email');
        isValid = false;
    }
     else if (validateEmail(emailval)) {
        setError(email,'Enter a valid email');
        isValid = false;
    }
     else {
        setSuccess(email);
    }

    if (passval === '') {
        setError(pass, 'Enter a password');
        isValid = false;
    } 
    else if (passval.length < 8) {
        setError(pass, 'Password must be at least 8 characters');
        isValid = false;
    }
     else {
        setSuccess(pass);
    }

    if (cpassval === '') {
        setError(cpass, 'Enter a password');
        isValid = false;
    } 
    else if (cpassval.length < 8) {
        setError(cpass, 'Password must be at least 8 characters');
        isValid = false;
    }

    else if (cpassval !== passval) {
        setError(cpass, 'Passwords do not match');
        isValid = false;
    }
     else {
        setSuccess(cpass);
    }

    return isValid;

}

function setError(element, message) {
    const inputform = element.parentElement;
    const errorElement = inputform.querySelector('.error');
    errorElement.innerHTML = message;
    inputform.classList.add('error');
    inputform.classList.remove('success');
}

function setSuccess(element) {
    const inputform = element.parentElement;
    const errorElement = inputform.querySelector('.error');
    errorElement.innerHTML = "";
    inputform.classList.add('success');
    inputform.classList.remove('error');
}

var validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^\s*[\w\-\+]+(\.[\w\-\+]+)\@[\w\-\+]+\.[\w\-\+]+(\.[\w\-\+_]+)\s*$/);
};

