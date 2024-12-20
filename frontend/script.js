
// ================== RUN ON START ===================== //
function main() {
    getData();
    $('.delete-user-button').click(deleteUser);
}

// ----------------------------------===================================================== API REQUEST FUNCTIONS
//// -----------------------------========================================= get users api
function getData() {
    axios({
        method: 'get',
        withCredentials: true,
        url: backendURL
    })
        .then((response) => {
            renderTable(response.data.data);
            $('.user-name-greeting').text(response.data.currentUser);
        })
        .catch((err) => {
            window.location.href = "./auth/register";
        })
}

//// -----------------------------========================================== delete users api
function deleteUser() {
    const userName = $('.user-name-field').text();
    const password = $('.password-field').val();
    console.log(userName, password);
    
    if (!(userName && password)) return alert("Enter password");

    axios({
        method: 'delete',
        url: backendURL + '/remove',
        withCredentials: true,
        data: {
            userName: userName, password: password
        }
    })
        .then((response) => {
            console.log(response);
            if (response.data.deletedCount==1) {
                hideModal();
                getData();
                return;
            }
            alert("Incorrect UserName or Password");
        })
        .catch((err) => {
            alert("Something went wrong, please try again later");
        })
}

// -----------------------------------------================================================== Construct and show table
function renderTable(data) {
    const table = $('.user-table .user-container');
    $('.user-table .user-container tr').remove();
    
    data.forEach(element => {
        const row = $('<tr></tr>');
        const userName = $('<td></td>').text(element.userName);
        // const password = $('<td></td>').text(element.password);
        row.append(userName);
        table.append(row);

        row.click(() => {
            showModal(element);
        })
    });
}

//-----------------------------==============================================================  Modal functions
function showModal(user) {
    $('.user-name-field').text(user.userName);
    $('#user-modal').modal('show');
}
function hideModal() {
    $('#user-modal').modal('hide');
}


$(document).ready(main)