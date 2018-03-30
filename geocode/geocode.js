//import { resolve } from 'url';

const request=require('request');

// var getLocation=(address,callback)=>{
//     var encodeAddress=encodeURIComponent(address);
//     request({
//         //url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
//         url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyB61_ckRN3PfKDmehuLiZHDDFyDZzglaBQ`,
//         json:true
//     },(error,response,body)=>{
//         if(error){
//             callback('Unable to connect to Google servers.');
//         }else if(body.status==='ZERO_RESULTS'){
//             callback('Unable to find that address.');
//         }else if(body.status==='OK'){
//             callback(undefined,{
//                 address:body.results[0].formatted_address,
//                 latitude:body.results[0].geometry.location.lat,
//                 longtitude:body.results[0].geometry.location.lng
//             });
//         }
//     }); 
// }


var getLocation=(address)=>{

    return new Promise((resolve,reject)=>{
        var encodeAddress=encodeURIComponent(address);
        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyB61_ckRN3PfKDmehuLiZHDDFyDZzglaBQ`,
            json:true
        },(error,response,body)=>{
            if(error){
                reject('Unable to connect to Google servers.');
            }else if(body.status==='ZERO_RESULTS'){
                reject('Unable to find that address.');
            }else if(body.status==='OK'){
                resolve({
                    address:body.results[0].formatted_address,
                    latitude:body.results[0].geometry.location.lat,
                    longtitude:body.results[0].geometry.location.lng
                });
            }
        }); 
    })
   
}


module.exports={
    getLocation
};

//3e77e040d9dddce22049597a0e6cca03

