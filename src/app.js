const request= require("request");
const geoCode=require("./utils/geoCode.js");
const foreCast=require("./utils/foreCast.js");

const path=require("path");
const hbs=require("hbs");

const express=require("express");

const port=process.env.PORT || 3000

const app=express();



//path for Public and Views and Partial Directory//
const publicDirectoryPath=path.join(__dirname,"../public");
const viewsPath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");

//setup Handler and View Location//
app.set("view engine","hbs");
app.set("views",viewsPath);
hbs.registerPartials(partialsPath);

//Static Directory to be serve// 
app.use("",express.static(publicDirectoryPath));
//Root router  will execute it defaultly//




app.get("/",(req,res)=>{
  res.render("index",{
  title:"Weather App"
  });
  });


app.get('/weather',(req,res)=>{
  if(!req.query.address)
  {
    res.send('Enter the Location,Try Again');
  }
  
 console.log(req.query.address);


geoCode(req.query.address,(error,{longitude,latitude,location}={})=>{

  if(error){
     console.log(error);
     return res.send({error});
  }

    console.log(location);
    
  
  foreCast(longitude,latitude,(error ,foreCastData)=>{
    if(error)
    {
      return res.send({error});
      console.log(error);
      
    }
         

    res.send({
      foreCast:foreCastData,
      location,
      address:req.query.address
    });
    

    
  });

});

});

app.get('/weather/*',(req,res)=>{
  res.render('404', {
    errorMessage: '404 Page Error'
  });
})


app.get("/*", (req, res) => {
  res.render('404', {
    errorMessage: '404 Page Error'
  });
});

app.listen(port,()=>{
console.log("Started at port 3000");

})