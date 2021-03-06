require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('express-ws')(app);

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.get('/',(req,res) => {
    res.send('Welcome to TH Blog service');
});
app.ws('/', (ws, res)=> {
    ws.on('message', (msg) => {
        ws.send(msg)
    })
})

const loginUser = require('./server/router/login.route');
const confide = require('./server/router/confide.route');

app.use('/api/auth/login', loginUser);
app.use('/confide', confide);

mongoose.connect(process.env.MONGO_URL_LOCAL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log('Mongodb connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`App listen at http://localhost:${PORT}`)
});
