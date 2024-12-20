// checks if user is logged in, if not go to login page
$(document).ready(() => {
    axios({
        method: 'get',
        withCredentials: true,
        url: backendURL + '/auth'
    })
        .then((response) => {
            if (!response.data)
                window.location.href = '../login';
            $('#user-name-input').val(response.data).prop('disabled', true);
        })
        .catch((error) => {
            window.location.href = '../login';
        })
})