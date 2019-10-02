const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='https://api.darksky.net/forecast/f9c4c097a0af8719bd7f18b960dea956/' + latitude + ',' + longitude
    request({url,json:true},(error,{body})=>{ //response object destructured into body
        if(error){
            callback('Unable to connect to weather service',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
         callback(undefined,body.daily.data[0].summary +'. It is '+ body.currently.temperature +' degrees out. The high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is '+ body.currently.precipProbability+ '% chances of rain today.')

        }
    })
}
module.exports=forecast
