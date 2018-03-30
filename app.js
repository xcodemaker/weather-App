const yargs=require('yargs'),
geocode=require('./geocode/geocode'),
weather=require('./weather/weather');

const argv=yargs
.option({
    a:{
        demand:true,
        alias:'address',
        describe:'Address to fetch weather for',
        string:true
    }
})
.help()
.alias('help','h')
.argv;


// geocode.getLocation(argv.address,(errorMessage,  results)=>{
//     if(errorMessage){
//         console.log(errorMessage);
//     }else{
//         console.log(results.address);
//         weather.getWeather(results.latitude,results.longtitude,(errorMessage, weatherResult)=>{
//             if(errorMessage){
//                 console.log(errorMessage);
//             }else{
//                 console.log(`It's currently ${weatherResult.temperature}. It feels like ${weatherResult.apparentTemperature}.`);
//             }
//         });
//     }
// });

geocode.getLocation(argv.address).then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
    return weather.getWeather(location.latitude,location.longtitude);
}).then((res)=>{
    console.log(JSON.stringify(res,undefined,2));
}).catch((errorMessage)=>{
    console.log(errorMessage);
})



