
const express = require('express')
const users = require('./data')
 
const app = express()

app.get('/' , (req,res) => {
    res.send('server is ready yrr ab')
})


app.get('/api/user' , (req,res) => {
    res.send(users)
})

const port = process.env.PORT || 3000 ;

app.listen(port , () => {
    console.log(`server runnig on ${port}`);
})
