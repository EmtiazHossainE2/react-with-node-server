const express = require('express');
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Module 64 practice ')
})

const users = [
    { id: '1', name: "Rahim", job: "Developer", email: "rahim@gamil.com" },
    { id: '2', name: "Korim", job: "designer", email: "Korim@gamil.com" },
    { id: '3', name: "JObbar", job: "seo expert", email: "JObbar@gamil.com" },
    { id: '4', name: "Tobbar", job: "wordpress developer", email: "Tobbar@gamil.com" },
    { id: '5', name: "Abdul", job: "ui expert", email: "Abdul@gamil.com" },
    { id: '6', name: "Dabdul", job: "software engineer", email: "Dabdul@gamil.com" },
    { id: '7', name: "Rahman", job: "social expert", email: "Rahman@gamil.com" }
]





app.listen(port, () => {
    console.log(`listening on port `, port)
})
