
document.addEventListener('DOMContentLoaded', function () {
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("confirm_password")
    const confirmPasswordError = document.getElementById("confirm_password_error");

    confirmPassword.addEventListener('change', function () {
        console.log(password.value);
        console.log(confirmPassword.value);
        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = "* Passwords do not match";
            confirmPasswordError.style.display = 'block';
            confirmPassword.classList.add('invalid');
            password.classList.add('invalid');
        } else {
            confirmPasswordError.textContent = "";
            confirmPasswordError.style.display = 'none';
            confirmPassword.classList.remove('invalid');
        }
    });
});