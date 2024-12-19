const backendURL = 'http://localhost:3000'

function main() {
    getData();
    $('.delete-user-button').click(deleteUser);
}

function getData() {
    axios({
        method: 'get',
        url: backendURL
    })
        .then((response) => {
            renderTable(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
}

function renderTable(data) {
    const table = $('.user-table');
    $('.user-table tr').remove();
    $('.user-table').append(
        `<tr>
            <th>userName</th>
            <th>password</th>
        </tr>`
    );
    data.forEach(element => {
        const row = $('<tr></tr>');
        const userName = $('<td></td>').text(element.userName);
        const password = $('<td></td>').text(element.password);
        row.append(userName, password);
        table.append(row);

        row.click(() => {
            showModal(element);
        })
    });
}

function showModal(user) {
    $('.user-name-field').text(user.userName);
    $('#user-modal').modal('show');
    console.log("clicking")
}

function deleteUser() {
    const userName = $('.user-name-field').text();
    const password = $('.password-field').val();
    console.log(userName, password);
    
    if (!(userName && password)) return alert("Enter password");

    axios({
        method: 'delete',
        url: backendURL + '/remove',
        data: {
            userName: userName, password: password
        }
    })
        .then((response) => {
            console.log(response);
            if (response.data.deletedCount==1) {
                $('#user-modal').modal('hide');
                getData();
                return;
            }
            alert("Incorrect UserName or Password");
        })
        .catch((err) => {
            alert("Something went wrong, please try again later");
        })
}


$(document).ready(main)