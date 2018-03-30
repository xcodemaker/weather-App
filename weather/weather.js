const request=require('request');

// var getWeather=(latitude,longtitude,callback)=>{

// request({
//     url:`https://api.darksky.net/forecast/3e77e040d9dddce22049597a0e6cca03/${latitude},${longtitude}?units=si`,
//     json:true
// },(error, response, body)=>{
//     if(error){
//         callback('Unable to connect to forecast.io server.');
//     }else if(response.statusCode===400){
//         callback('Unable to fetch weather'); 
//     }else if(response.statusCode===200){
//         callback(undefined,{
//             temperature: body.currently.temperature,
//             apparentTemperature: body.currently.apparentTemperature
//         });
    
//     }
// });
// }

var getWeather=(latitude,longtitude)=>{
    return new Promise((resolve,reject)=>{
    request({
        url:`https://api.darksky.net/forecast/3e77e040d9dddce22049597a0e6cca03/${latitude},${longtitude}?units=si`,
        json:true
    },(error, response, body)=>{
        if(error){
            reject('Unable to connect to forecast.io server.');
        }else if(response.statusCode===400){
            reject('Unable to fetch weather'); 
        }else if(response.statusCode===200){
            resolve({
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        
        }
    });
})
}


module.exports={
    getWeather
}