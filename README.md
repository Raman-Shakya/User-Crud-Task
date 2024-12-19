# User System
## Tasks
1. Create CRUD operation for user registration and also include user login and password reset (user mongodb for database)
2. Create Table using jQuery, HTML, CSS, Bootstrap (jQuery DOM manipulation) to display the registered users
3. Pop up modal when click rows of table with jQuery Events ad Bootstrap

4. Simple Http request from Frontend to backend using Axios.

> MERN solution to handle CRUD for users with (userName and password)

## Database
`MongoDB` is used as database with collection `user` has the following fields:
1. userName
2. password

## Backend
`Express` server is used to handle APIs which performs CRUD operations on `user` database.
List of APIs:
1. GET `/user`
    Returns list of all users including `userName` and `password`

2. POST `/user`
    Adds a new user given `userName` and `password` in the **POST** request body

3. POST `/login`
    Logs in given `userName` and `password` in the **POST** request body and returns a JWT token

3. PUT `/user/reset-password`
    Resets a password of a given user by specifying `userName` and `password` field in the **PUT** request body

4. DELETE `/user/remove`
    Deletes a user given `userName` and `password` only if password matches specified in the **DELETE** request body

## Frontend
