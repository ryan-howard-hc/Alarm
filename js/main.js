function currentTime(){
    var date = new Date();
    var year = date.getFullYear(); 
    var month = date.getMonth(); //0-12
    var day = date.getDay(); //0-31
    var hour = date.getHours(); //0-23
    var minute = date.getMinutes(); //0-59
    var second = date.getSeconds(); //0-59
    var session = "AM"; 
    var military = ""; //no am or pm, just a number/date

        if(hour == 0){ //AM
            hour = 12;
        }

        if(hour > 12){      // If not AM, PM
            hour = hour - 12;
            session = "PM";
        }

    hour = (hour < 10) ? "0" + hour : hour;             //
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    var time = hour + ":" + minute + ":" + second + " " + session;
    document.getElementById("Timer").innerText = time;
    document.getElementById("Timer").textContent = time;

    setTimeout(currentTime, 1000);

}

currentTime();
















};