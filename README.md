# React-with-node-server 


# folder banay npm init -y ; npm install express , script e [package.json] 

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

    


