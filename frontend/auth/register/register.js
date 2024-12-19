const backendURL = "http://localhost:3000"

$('#register-user-form').submit((e) => {
    registerUser(e);
})

function registerUser(e) {
    e.preventDefault();

    const userName = $('.user-name').val();
    const password = $('.password').val();
    const confirmPassword = $('.confirm-password').val();

    if (!(userName && password && confirmPassword)) return alert("Fill all fields");
    if (password !== confirmPassword) return alert("Password doesn't match confirm password");

    axios.post(backendURL,
        {
            userName, password
        }
    )
        .then((response) => {
            window.location.href = "../login"
        })
        .catch((error) => {
            alert("Something went wrong, please try again later.");
        })

    return false;
}