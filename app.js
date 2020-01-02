const request= require("request");
const geoCode=require("./utils/geoCode.js");
const foreCast=require("./utils/foreCast.js");

const express=require("express");


const app=express();

const data=process.argv[2];

console.log(data);


geoCode(data,(error,{longitude,latitude,location})=>{


  if(error){
   console.log('Error',error);
   return ;
  }
 // console.log(longitude + " " + latitude + " " + location );

 console.log(location);
 
  
  foreCast(longitude,latitude,(error ,foreCastData)=>{
  
          console.log(foreCastData);
             
  })



})


app.listen('3000',()=>{
console.log("Started at port 3000");

})