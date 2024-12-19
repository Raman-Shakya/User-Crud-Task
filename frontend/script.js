const backendURL = 'http://localhost:3000'

function main() {
    getData();
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
    console.log(data);
    const table = $('.user-table');
    data.forEach(element => {
        const row = $('<tr></tr>');
        const userName = $('<td></td>').text(element.userName);
        const password = $('<td></td>').text(element.password);
        row.append(userName, password);
        table.append(row);

        row.click(() => {
            showModal(element);
        })

        console.log(row);
    });
}

function showModal(user) {
    $('.user-name-field').text(user.userName);
    $('#user-modal').modal('show');
    console.log("clicking")
}

$(document).ready(main)