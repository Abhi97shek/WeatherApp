
console.log("js from client side");




const place = document.querySelector("#location");
place.textContent = "";


const temp = document.querySelector("#temp");
temp.textContent = " ";


const desc = document.querySelector("#desc");
temp.textContent = " ";

const weather_form =document.querySelector("#weather_form");
const search =document.querySelector('#place');
weather_form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const location =search.value;
    console.log(location);


    fetch(`http://localhost:3000/weather?address=Pathankot`).then(res=>{
        res.json().then(result=>{
        

            console.log(result.data.place_name);

            place.textContent = result.data.place_name;

            temp.textContent = result.data.temp + '°C';

            desc.textContent = result.data.desc;
        })
    }).catch(err=>{
        console.log(err);
    });


  
});

