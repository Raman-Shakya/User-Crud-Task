//  -------- onsubmit event listener for register-user-form
$('#register-user-form').submit((e) => {
    registerUser(e);
})

// ------------=================== sends cookies (auth cookies) if present and accepts it 
axios.defaults.withCredentials = true;

// ---------------------------================================================= Register User API
function registerUser(e) {
    e.preventDefault();

    const userName = $('.user-name').val();
    const password = $('.password').val();
    const confirmPassword = $('.confirm-password').val();

    if (!(userName && password && confirmPassword)) return alert("Fill all fields");
    if (password !== confirmPassword) return alert("Password doesn't match confirm password");

    axios.post(backendURL, {
        userName, password
    })
        .then((response) => {
            window.location.href = "../../"
        })
        .catch((error) => {
            alert("Something went wrong, please try again later.");
        })

    return false;
}