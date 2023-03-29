const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const data = [
    {
        "id":1,
        "title":"Harry Potter"
    },
    {
        "id":2,
        "title":"Hermione Granger"
    },
    {
        "id":3,
        "title":"Ron Weasley"
    }
]

app.get("/",(req,res) => {
    res.json(data);
})

app.listen(4000,()=> {
    console.log(`Listening to port 4000`);
})