/*
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 

*/

const s = "12:01:00AM";
const isAmPm = s.slice(-2);
const time = s.split(":");
const hour = time[0];
const minutes = time[1];
const seconds = time[2].substr(0,2);
let newTime = "";

if(isAmPm === 'AM') {
    if(hour == 12) {
        newTime = `00:${minutes}:${seconds}`;
    } else {
        newTime = `${hour}:${minutes}:${seconds}`;
    }
} else {
    if(hour == 12) {
        newTime = `12:${minutes}:${seconds}`;
    } else {
    newTime = `${Number(hour) + 12 }:${minutes}:${seconds}`;
    }
}

//return newTime;

console.log(newTime);