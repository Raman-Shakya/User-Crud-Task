// checks if user is logged in, if not go to login page
axios({
    method: 'get',
    withCredentials: true,
    url: backendURL + '/auth'
})
    .then((response) => {
        if (!response.data)
            window.location.href = '../login';
    })
    .catch((error) => {
        window.location.href = '../login';
    })