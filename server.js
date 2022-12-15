const express = require('express');
const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI');
const path = require('path');

const app = express();

//bodyParser middleware
app.use(express.json());

//Mongoose Connection
mongoose
    .connect(db,{ useNewUrlParser: true , useCreateIndex:true, useUnifiedTopology: true })
    .then( console.log('Connected to Mongoose'))
    .catch(err => console.log(err))


//routes

app.use('/api/fetchCake',require('./routes/fetchCake'));
app.use('/api/findCake',require('./routes/findCake'));
app.use('/api/fetchRole',require('./routes/fetchRole'));
app.use('/api/findRole',require('./routes/findRole'));
app.use('/api/fetchCookie',require('./routes/fetchCookie'));
app.use('/api/findCookie',require('./routes/findCookie'));
app.use('/api/addrecord',require('./routes/addrecord'));
// app.use('/api/findProducts',require('./routes/findProducts'));
// app.use('/api/findProduct',require('./routes/findProduct'));
// app.use('/api/register',require('./routes/api/users'));
// app.use('/api/auth',require('./routes/api/auth'));
// app.use('/addtocart',require('./routes/addtocart'));
// app.use('/checkcart',require('./routes/checkcart'));
// app.use('/relatedProducts',require('./routes/relatedProducts'));
// app.use('/fetchCart',require('./routes/fetchCart'));
// app.use('/removecart',require('./routes/removecart'));
// console.log(__dirname)
//Serve static asserts if in production
if(process.env.NODE_ENV === 'production' || true){
    //Set static folder
    app.use(express.static('client/build'));
    

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// const hii;
const port = process.env.PORT || 5000 ;
app.listen(port, ()=>{ console.log(`server running on port ${port}`)} );