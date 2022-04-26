
const routes = require(`./routes.js`);
const express = require(`express`);
const bodyParser = require("body-parser");
const app = express();
const mysql = require(`mysql`);
const path = require("path");
const methodOverride = require("method-override");




app.use(bodyParser.urlencoded({extended : true}))
app.set(`view engine`, `ejs`);
// errors during css link used inline css 
app.use(express.static(path.join(__dirname, `public`)));
app.use(methodOverride(`_method`))
app.use(`/`, routes);


app.listen(3000 || process.env.PORT, ()=>{
    console.log(`running at localhost/3000`);
})