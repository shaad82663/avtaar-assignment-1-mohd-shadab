const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();  

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



app.get("/", (req, res) => {
    
     res.sendFile(__dirname+"/index.html");
})

app.post("/", (req, res) => {
    const _id = crypto.randomBytes(16).toString('hex');

    const myName = req.body.name;

    let today = new Date().toISOString().slice(0, 10);

    let time =  new Date().toLocaleTimeString();

    const myObj = {
        id : _id,
        name : myName,
        currDate : today,
        currTime : time   
    }
       res.send(`
       <center>
       <div> 
       <h1>User Details</h1>
        <p>Name: ${myObj.name}</p>
        <p>ID:${myObj.id}</p>
        <p>Time:${myObj.currTime}</p>
        <p>Date:${myObj.currDate}</p>
       </div>
       </center>`
       );
})

app.listen(3000, () => {
    console.log('Running server over loalhost:3000');
})