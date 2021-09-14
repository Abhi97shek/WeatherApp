const request = require('request');
const weatherApi  = (longi,lati,callback)=>
{
    const url = `http://api.weatherstack.com/current?access_key=bf8d05a5cd11cc2a1df06b8e9ad5fd2b&query=${lati},${longi}`;
    request({url ,json:true},(err,res)=>{
    if(err)
    {
        console.log(err);
    }
        console.log(res.body.location.name);
        console.log(res.body.current.temperature);
        console.log(res.body.current.weather_descriptions[0]);

        data ={
            place_name:res.body.location.name,
            temp : res.body.current.temperature,
            desc : res.body.current.weather_descriptions[0]
        };
        callback(data);
});
}


module.exports = weatherApi;