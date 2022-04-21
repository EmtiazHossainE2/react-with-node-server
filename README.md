# React-with-node-server 


Create a folder and npm init -y ; npm install express , script  [package.json] 

    "start" : "node index.js",
    "start-dev" : "nodemon index.js",

# index.js => 

    const express = require('express');
    const app = express()
    const port = process.env.PORT || 5000

    app.get('/', (req, res) => {
        res.send('Module 64 practice ')
    })

    app.listen(port, () => {
        console.log(`listening on port `, port)
    })


# get users 

    app.get('/users', (req, res) => {
        res.send(users)
    })

# get user 

    const users = [
        { id: '1', name: "Rahim", job: "Developer", email: "rahim@gamil.com" },
        { id: '2', name: "Korim", job: "designer", email: "Korim@gamil.com" },
        { id: '3', name: "JObbar", job: "seo expert", email: "JObbar@gamil.com" },
        { id: '4', name: "Tobbar", job: "wordpress developer", email: "Tobbar@gamil.com" },
        { id: '5', name: "Abdul", job: "ui expert", email: "Abdul@gamil.com" },
        { id: '6', name: "Dabdul", job: "software engineer", email: "Dabdul@gamil.com" },
        { id: '7', name: "Rahman", job: "social expert", email: "Rahman@gamil.com" }
    ]

    app.get('/user/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(u => u.id == id)
        res.send(user)
    })

# display user using react 

    //client site 
    import React, { useEffect, useState } from 'react';
    import './App.css'

    const App = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    }, [])

    const handleAddUser = e => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const user = { name, email }
    console.log(user);

    //post data
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        const newUser = [...users, data]
        setUsers(newUser)
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });


    }

    return (
            <div className='App'>
            <h2>Module 64 practice {users.length}</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id=" " placeholder='Name' required />
                <input type="text" name="email" id=" " placeholder='Email' required />
                <input type="submit" value="addUser" />
            </form>
            {
                users.map(user => <p>Id: {user.id} Name : {user.name} Email : {user.email}</p>)
            }
            </div>
        );
    };

    export default App;
    


