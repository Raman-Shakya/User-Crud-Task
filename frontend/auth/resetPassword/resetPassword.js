const backendURL = "http://localhost:3000"

$('#reset-password-form').submit((e) => {
    resetPassword(e);
})

function resetPassword(e) {
    e.preventDefault();
    
    const userName = $('.user-name').val();
    const oldPassword = $('.old-password').val();
    const newPassword = $('.new-password').val();

    if (!(userName && oldPassword && newPassword)) return alert("Enter all fields.");

    axios.put(backendURL + "/reset-password",
        {
            userName, oldPassword, newPassword
        }
    )
        .then((response) => {
            if (response.data.modifiedCount == 1) {
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