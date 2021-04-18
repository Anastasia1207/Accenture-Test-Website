const registrationForm = document.getElementById('register-form')
const submitButton = registrationForm.elements['submit']
const passwordInput =registrationForm.elements['password']
const repeatPasswordInput = registrationForm.elements['passwordRepeat']

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (passwordInput.value !== repeatPasswordInput.value) {
        alert('Passwords does not match')
        return
    }

    alert('Successfully submitted')
})

registrationForm.elements['TandC'].addEventListener('change', (e) => {
    if (e.target.checked) {
        submitButton.disabled = false
    } else {
        submitButton.disabled = true
    }
})