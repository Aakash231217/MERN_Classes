const axios = require("axios");

//POST 
{/*async function main(){
    const response = await fetch(
        "https://www.toptal.com/developers/postbin/1706261117587-5522551864851",
        {
            method:"POST",
        },
        {
        BEARER: "AUTHORIZE 123"}
    );
    const textualData = await response.json();
    console.log(textualData);
}*/}
async function main(){
    const response = await axios.post("https://www.toptal.com/developers/postbin/1706261117587-5522551864851",{
      username:"Aakash",
      password:"Aakash123"
    },{
        headers:{
            Authorization:"Bearer 123"
        }
    });
    console.log(response.data);
}
main();
