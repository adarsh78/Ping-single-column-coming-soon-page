let mainCard = document.querySelector(".main");
let inputEmail = document.getElementsByClassName(".input-email");
let form = document.getElementById('form');
let input = document.getElementById("email");
let button = document.getElementById("btn");


button.addEventListener('click', e => {
    e.preventDefault();
    
    validateInputs();
});

function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
}

let setError = (element, message) => {
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
};

let setSuccess = element => {
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



let validateInputs = () => {
    let emailValue = email.value.trim();

    if(emailValue === '') {
        setError(email, 'Email cannot be empty');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Please provide a valid email address');
    } else {
        setSuccess(email);
    }
}

