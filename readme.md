<h1 align="center">track server</h1>

Server and database for [route tracker](https://github.com/beahowel117/route-tracker)

## Technologies
Express API, MongoDB

## Server

`MongoDB`

MongoDB is a NoSQL database. You will need to create an account at cloud.mongodb.com

Install a package json
```
npm init -y
```
Install all dependencies
```
npm install bcrypt express jsonwebtoken mongoose nodemon
```
`Express`

Express is used to create your routes from your frontend to your backend

`Mongoose`

Mongoose is used alongside MongoDB to define your database schema and manage relationships between data

`JSON Web Token and Bcrypt`

Both are used for encryption and security of user passwords

`Nodemon`

Nodemon helps to automatically restart the application when changes have been made




