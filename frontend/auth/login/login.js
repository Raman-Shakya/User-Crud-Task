//  -------- onsubmit event listener for login-form
$('#login-form').submit((e) => {
    login(e);
})

// ---------------------------================================================= Login User API
function login(e) {
    e.preventDefault();
    
    const userName = $('.user-name').val();
    const password = $('.password').val();

    // if any field is mising, terminate
    if (!(userName && password)) return alert("Both fields are required.");

    axios({
        method: "post",
        url: backendURL + "/login",
        withCredentials: true,
        data: {
            userName, password
        }
    })
        .then((response) => {
            window.location.href = '../../';
        })
        .catch((error) => {
            alert("Invalid credentials");
        })

    return false;
}