const yargs=require('yargs'),
geocode=require('./geocode/geocode'),
weather=require('./weather/weather'),
axios=require('axios');


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


var encodeAddress=encodeURIComponent(argv.address);
var geocodeUrl=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyB61_ckRN3PfKDmehuLiZHDDFyDZzglaBQ`;

axios.get(geocodeUrl).then((response)=>{
    console.log(response.data);
}).catch((e)=>{
    console.log(e);
});


