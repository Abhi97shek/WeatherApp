const request =require('request');
const geoCode  = async (city,callback)=>
{
    let longi;
    let lati;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiYWJoaS1zaGVrMSIsImEiOiJja3RqbzQ5OHUwNGZqMnBueWw1aW9uamxyIn0.Mcz_jLgNnJq_1Z76p8CuIQ&limit=1`;
    request({url,json:true},(err,res)=>{
    if(err)
    {
        console.log(err);
    }
     longi = res.body.features[0].center[0];
     lati =   res.body.features[0].center[1];

     data={
         longi:longi,
         lati:lati
     };
     callback(data);
     
});
}


module.exports = geoCode;

