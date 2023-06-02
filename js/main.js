
function currentTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1; //0-12 DONT KNOW WHY THE +1 is needed?
    var day = date.getDate(); //0-31
    var hour = date.getHours(); //0-23
    var minute = date.getMinutes(); //0-59
    var second = date.getSeconds(); //0-59
    var session = "AM";
    var military = false; //no am or pm, just a number/date



    if (hour == 0) { //AM
        hour = 12;
    }

    if (hour > 12) {      // If not AM, PM
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;             // under 10, adds 0 to format
    minute = (minute < 10) ? "0" + minute : minute;     // ASK JUSTIN/MICHAEL WHY
    second = (second < 10) ? "0" + second : second;
    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;


var time = hour + ":" + minute + ":" + second + " " + session;
var time2 = month + "/" + day + "/" + year;

    document.getElementById("Timer").innerText = time;
    document.getElementById("Timer").textContent = time;
    document.getElementById("time2").innerText = time2
    document.getElementById("time2").textContent = time2;
    setTimeout(currentTime, 1000);

};

currentTime();

setInterval(1000);

document.getElementById("setAlarmButton").addEventListener("click", function() {

})








