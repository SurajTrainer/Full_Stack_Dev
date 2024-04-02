
const express = require('express')
const app = express()


// middleware portion  
// start

    app.use((req , res , next) => {
        console.log('first next started');
        next();
    })

    app.use((req , res , next) => {
        console.log('second next started');
        next();
    })

// end

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/next', function (req, res) {
  res.send('This is next page yrrr sach me.. ')
})
// dynamic routing
app.get('/next/:username', function (req, res) {
    // res.send('This is for unknown output.. ')
    res.send(`This is from ${req.params.username} .. `)
  })

app.listen(3000)