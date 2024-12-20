//  -------- onsubmit event listener for reset-password-form
$('#reset-password-form').submit((e) => {
    resetPassword(e);
})

// Set withCredentials to true for all requests
axios.defaults.withCredentials = true;

// ---------------------------================================================= Reset Password API
function resetPassword(e) {
    e.preventDefault();
    
    // const userName = $('.user-name').val();
    const oldPassword = $('.old-password').val();
    const newPassword = $('.new-password').val();

    // if any field is none, stop the process
    if (!(oldPassword && newPassword)) return alert("Enter all fields.");

    axios.put(backendURL + "/reset-password", {
        oldPassword, newPassword
    })
        .then((response) => {
            if (response.data.modifiedCount == 1) {
                // goto root index.html
                window.location.href = '../../';
                return;
            }
            alert("Incorrect password.");
        })
        .catch((error) => {
            alert("Something went wrong, please try again later.");
        })

    return false;
}