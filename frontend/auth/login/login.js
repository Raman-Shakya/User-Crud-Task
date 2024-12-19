const backendURL = "http://localhost:3000"

$('#login-form').submit((e) => {
    login(e);
})

function login(e) {
    e.preventDefault();
    
    const userName = $('.user-name').val();
    const password = $('.password').val();

    if (!(userName && password)) return;

    axios({
        method: "post",
        url: backendURL + "/login",
        withCredentials: true,
        data: {
            userName, password
        }
    })
        .then((response) => {
            document.cookie = response.data;
            localStorage.setItem('loginToken', response.data);
            console.log(document.cookie);
        })
        .catch((error) => {
            console.error(error);
        })

    return false;
}