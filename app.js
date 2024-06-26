const express= require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser')
const postsRoutes=require('./routes/post');
const authsRoutes=require('./routes/Auth')
const cors = require('cors')
require('dotenv/config');
const port = 3500


app.use(cors())
app.use(bodyParser.json());
///import routes


app.use('/posts',postsRoutes);
app.use('/auth', authsRoutes);




///Routes
app.get('/',(req,res)=>{
    res.send("let's the party begin");
});

///Connect to DB
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected!");
  })
  .catch((err) => {
    console.log("oh no error");
    console.log(err);
  });

///Star listening to port
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})