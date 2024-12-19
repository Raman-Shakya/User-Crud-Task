const backendURL = "http://localhost:3000"

$('#register-user-form').submit((e) => {
    registerUser(e);
})

function registerUser(e) {
    e.preventDefault();

    const userName = $('.user-name').val();
    const password = $('.password').val();
    const confirmPassword = $('.confirm-password').val();

    if (password !== confirmPassword) return alert("Password doesn't match confirm password");
    if (!(userName && password && confirmPassword)) return;

    axios.post(backendURL,
        {
            userName, password
        }
    )
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        })

    return false;
}