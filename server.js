const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const exphbs = require('express-handlebars');

const Handlebars = require('handlebars')
app.engine('handlebars', exphbs({ 
    defaultLayout: 'main' 
}));
app.set('view engine', 'handlebars');

// routes
// app.use(require("./routes/api.js"));

app.get("/",(req,res)=> {
    res.render("start"); 
})

app.post("/exercise", (req, res) => {
    db.Exercise.create(req.body)
    .then(dbEx => {
        const hbs ={
            name: dbEx.name
        }
        res.render("index", hbs)
    }).catch(err => {
        res.json(err)
    })
})

app.get("/previous", (req, res) => {
    db.Exercise.find()
    .then(dbEx => {
        const hbs ={
            ex: dbEx
        }
        res.json(hbs)
        // res.render("previous", hbs)
    }).catch(err => {
        res.json(err)
    })
})

// app.delete("/delete", (req,res){
//     db.Exercise.deleteOne({
//         _id: 
//     })
// })

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
