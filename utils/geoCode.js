const request=require('request')


const geoCode = (address, callback) => {

    const url =
      'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYnJpamVzaHlhZGF2MDA3IiwiYSI6ImNrM3U2ZnAxaTA5bzgzZWxrdzF2cTZqeWwifQ.RdnGhtRkYmstnLJ3yG0-6g&limit=1';

      console.log(url);
      
  
    request({url,json: true}, (error, {body}) => {
  
      if (error) {
        callback('Unable to  connect to the Weather App', undefined)
  
      } else if (body.features.length === 0) {
  
        callback('Unable to find the location, Try another Location', undefined)
  
      } else {
        callback(undefined, {
          longitude: body.features[0].center[1],
          latitude: body.features[0].center[0],
          location: body.features[0].place_name
          
        })
      }
    }) 
  
  }

  module.exports=geoCode