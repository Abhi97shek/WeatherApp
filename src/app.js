const path = require('path');
const express =require('express');
const hbs =require('hbs');
const request = require('request');
const geoCode =require('../utils/geocode');
const weatherApi =require("../utils/weather");
const app = express();


const publicDir = path.join(__dirname,"../public");
const viewsPath =path.join(__dirname,"../views")
const partialsPath = path.join(__dirname,"../views/partials");


app.use(express.static(publicDir));

hbs.registerPartial('partial',partialsPath);
app.set("view engine",'hbs');
app.set("views",viewsPath);








app.get("/",(req,res)=>{

    res.render('index',{
        title:"Weather",
        name:"Abhishek"
    });
});

app.get("/about",(req,res)=>{
    res.render("about",{
        title:"About"
    });
});

app.get('/weather',(req,res)=>{
 
    console.log(req.query);

    geoCode(req.query.address,(data)=>{
        weatherApi(data.longi,data.lati,(data)=>{

            res.send({
                data
            });
        });
    });

    
});


app.get('*',(req,res)=>{

    res.render("404",{
        title:"Page Not Found",
        name:"Abhishek"
    })
});




app.listen(3000,()=>{

    console.log(`Listening on the Part 3000`);
});