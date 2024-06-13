const express = require('express');
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')
// static assets
app.use(express.static('./methods-public'));

//middleware for posting
//parse form data
// so what is urlencoded ? ==> This is a built-in middleware function in Express.
//It parses incoming requests with urlencoded payloads and is based on body parser.
app.use(express.urlencoded({extended:false}))

//parse json
app.use(express.json());

//setting up the login route
app.use('/login',auth);

//setting up the people route
app.use('/api/people',people)

app.listen(5000,()=>{
    console.log('listening on port 5000...');
})