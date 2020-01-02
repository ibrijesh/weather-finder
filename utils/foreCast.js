
const request=require('request')

const chalk=require('chalk')

const foreCast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d59800cb656d9ff535448e7552c32a07/' + longitude + ',' + latitude+'?units=si'
  console.log(url);
  
    request({ url, json: true }, (error, {body}) => {
      if (error) {
        callback('Unable to connect to forecast! ', undefined)
      } else if (body.error) {
        callback('Unable to Find the Location! ', undefined)
      } else {
        callback(undefined, {
          icon:body.daily.data[0].icon,
          summary:body.daily.data[0].summary,
          temperature:body.currently.temperature, 
          addInfo:{
            temperatureHigh:body.daily.data[0].temperatureHigh,
            temperatureLow:body.daily.data[0].temperatureLow,
            rainProb:body.currently.precipProbability,
            windSpeed:body.currently.windSpeed,
            visibility:body.currently.visibility,
            humidity:body.currently.humidity
          }
          
        })

        //console.log(summary);
        //console.log(temperature); 
        /*
       console.log(body.daily.data[0].icon);
       console.log(body.daily.data[0].windSpeed);
       console.log(body.daily.data[0].visibility);
       console.log(body.daily.data[0].humidity);
       console.log(body.daily.data[0].temperatureHigh);
       console.log(body.daily.data[0].temperatureMin);

       */
        
        
      } 
  
  
    })
  }
  

  module.exports=foreCast