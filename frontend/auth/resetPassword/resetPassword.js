const backendURL = "http://localhost:3000"

$('#reset-password-form').submit((e) => {
    resetPassword(e);
})

function resetPassword(e) {
    e.preventDefault();
    
    const userName = $('.user-name').val();
    const oldPassword = $('.old-password').val();
    const newPassword = $('.new-password').val();

    if (!(userName && oldPassword && newPassword)) return;

    axios.put(backendURL + "/reset-password",
        {
            userName, oldPassword, newPassword
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