
// REGISTATION FORM VALIDATION

// Selecting Elements
const nameField = document.querySelector('.nameField')
const emailField = document.querySelector('.emailField')
const phoneField = document.querySelector('.phoneField')
const password = document.querySelector('.password');
const passwordTwo = document.querySelector('.passwordTwo');
const output = document.querySelector('.output')

// Name Validation Function
const nameValidation = () => {
    if(nameField.value == '' || nameField.value == null) {
        output.classList.add('err')
        output.innerHTML =  `Name can't be empty`;
        return false;
    } else if(nameField.value.length < 5) {
        output.innerHTML = `Name should be atleast 5 Charcter`;
        output.classList.add('err');
        return false;
    } else {
        output.classList.remove('err')
        output.innerHTML = '';
        return true;
    }
}
// Email Validation Function
const emailValidation = () => {
    const emailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

    if(emailField.value == '' || emailField.value == null) {
        output.innerHTML = `Enter Your Email`;
        output.classList.add('err')
        return false;
    } else if(emailRegExp.test(emailField.value)) {
        output.innerHTML = ''
        return true;
    } else {
        output.classList.add('err');
        output.innerHTML = `Invailed Email Address.`;
        return false;
    }
}
// Phone Number Validation Function
export const phoneValidation = () => {
    const phoneRegExp = /^[01]+[3-9]\d{8}$/ ;

    if(phoneRegExp.test(phoneField.value)) {
        output.innerHTML = '';
        return true;
    } else {
        output.classList.add('err');
        output.innerHTML = `Invailed Phone Number`;
        return false;
    }
}
// Password Validatio Function
const passwordValidation = () => {
    if(password.value == '' || password.value == null) {
        output.innerHTML = `Password can't be empty. Enter Password`;
        output.classList.add('err');
        return false
    } else if(password.value.length <6) {
        output.innerHTML = `Password should be more than 6 Charcter.`;
        output.classList.add('err');
        return false;
    } else if(password.value != passwordTwo.value) {
        output.innerHTML = `Password doesn't match`;
        output.classList.add('err');
        return false;
    } else{
        output.innerHTML = ''
        return true;
    }
}

// Main Registation Validation Function
function regiseterValidate() {
    if(nameValidation() && emailValidation() && phoneValidation() && passwordValidation()) {
        output.innerHTML = `Registation Successfull`;
        output.style.padding = '10px'
        // Sending Data to Server
        const userInfo = {
            name: nameField.value,
            email: emailField.value,
            phone:phoneField.value,
            password: password.value
        }
        fetch('http://localhost:3000/user',{
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        nameField.value = '';
        emailField.value = '';
        phoneField.value = '';
        password.value = '';
        passwordTwo.value = '';
        return true;
    }
}

const registationBtn = document.querySelector('.registationBtn');
registationBtn.addEventListener('click',regiseterValidate);


