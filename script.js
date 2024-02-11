const passwords = document.querySelector('.passwords')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const confirmPasswordMsg = document.querySelector('#confirmPassword + .inputMsg')

passwords.addEventListener('input', () => {
    if (password.value != confirmPassword.value && password.value != '') {
        confirmPasswordMsg.style.visibility = 'visible'
        confirmPasswordMsg.style.color = 'red'
    } else {
        confirmPasswordMsg.style.visibility = 'hidden'
    }
})