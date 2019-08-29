// LOGIN VALIDTIOAN
const email = document.querySelector('.logInEmail')
const password = document.querySelector('.logInPassword')
const output = document.querySelector('.logInOutput');


// LOGIN VALIDATION FUNCTION
function logInValidation() {
    fetch('http://localhost:3000/user')
        .then(res => res.json())
        .then(json => {
            json.find((user) => {
                if(email.value == '' || email.value == null) {
                    output.innerHTML = `Enter your email`;
                    output.classList.add('err');
                    return false;
                } else if (user.email != email.value) {
                    output.innerHTML = `Can't find Email : ${email.value}`;
                    output.classList.add('err');
                    return false;
                } else {
                    output.innerHTML = ``;
                    output.classList.remove('err')
                    // PASSWORD VALIDATION FOR TARGETED USER
                    if(password.value == '' || password.value == null){
                        output.innerHTML = `Enter your Password`;
                        output.classList.add('err')
                    } else if(user.password !== password.value) {
                        output.innerHTML = `Invailed Password`;
                        output.classList.add('err');
                    } else {
                        output.innerHTML = `Login Successfull`;
                        output.classList.remove('err')
                        output.setAttribute('style','padding:10px;')

                        email.value = '';
                        password.value = ''
                    }
                    return true
                }
                
            });
        })
        .catch(error => console.log(error))
}


const logInBtn = document.querySelector('.logInBtn');
logInBtn.addEventListener('click', logInValidation)