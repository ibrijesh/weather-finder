
const request=require('request')

const chalk=require('chalk')

const foreCast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d59800cb656d9ff535448e7552c32a07/' + longitude + ',' + latitude+'?units=si'
  

    
    request({ url, json: true }, (error, {body}) => {
      
      if (error) {
        callback('Unable to connect to forecast! ', undefined)
      } else if (body.error) {
        callback('Unable to Find the Location! ', undefined)
      } else {
        callback(undefined, {
          timezone:body.timezone,
          icon:body.daily.data[0].icon,
          summary:body.daily.data[0].summary,
          temperature:body.currently.temperature, 
          addInfo:{
            temperatureHigh:body.daily.data[0].temperatureHigh,
            temperatureLow:body.daily.data[0].temperatureLow,
            rainProb:body.currently.precipProbability,
            windSpeed:body.currently.windSpeed,
            humidity:body.currently.humidity,
            visibility:body.currently.visibility
            
          }
          

        });
        
      } 
    
    });
  }
  

  module.exports=foreCast