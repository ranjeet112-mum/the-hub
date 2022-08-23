const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

/*
 
 TODO: This piece of code can be used to determine the time zone of the user
 * Store the timeoffset of the user's region in the (UtcTimeOffset) column of Users table 
var date = new Date();
console.log(date.getTimezoneOffset());    
console.log(date.getUTCHours());
console.log(date.getUTCMinutes());
const localTime = date.getTimezoneOffset() // ! Get this field from the browser itself 
const UtcMinutes = date.getUTCMinutes();
const UtcHours = date.getUTCHours();
    var t = localTime * -1;
    var h  = parseInt(t/60);
    t  = t - (60*h);
    var m =UtcMinutes + t ;
    if(m >= 60 ) {
        h++;
        m = m-60; 
    }
    var amOrPm = 'AM';
    h = UtcHours + (h) 
    if(h >= 12 && h < 24 )  amOrPm = 'PM';
    if(h >= 24) h = h-24;
    if(h > 12){ h = h-12;}
    console.log(((h<10)?`0${h}`: h) + ":" + ((m<10)?`0${m}`:m) + amOrPm);

*/
app
.route('*')
 .get((req,res) => {res.status(404).send({"hello":"world"})})
.post((req,res) => {res.status(404).send({"hello":"world"})});

app.listen(PORT, ()=>{
    console.log("server up running");
})