function adjustClockSize() {
    var clockContainer = document.querySelector('.clock-container');
    var timer = document.getElementById('Timer');
    var time2 = document.getElementById('time2');

    var windowWidth = window.innerWidth;
    
    var fontSizePercentage = (windowWidth < 768) ? 10 : 15; 
    
    var fontSize = (windowWidth * fontSizePercentage) / 100;

    timer.style.fontSize = fontSize + 'px';
    time2.style.fontSize = (fontSize / 2) + 'px'; 
}
adjustClockSize();
window.addEventListener('resize', adjustClockSize);


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

document.getElementById("militarytime").addEventListener("click", function() {
    toggleMilitaryTime();
});

function toggleMilitaryTime() {
    var timerElement = document.getElementById("Timer");
    var time = timerElement.textContent;

    var militaryTime = convertToMilitaryTime(time);
    timerElement.innerText = militaryTime;
}

function convertToMilitaryTime(time) {
    var session = time.slice(-2);
    var timeWithoutSession = time.slice(0, -3);
    var [hour, minute, second] = timeWithoutSession.split(":");

    if (session === "PM" && hour !== "12") {
        hour = String(Number(hour) + 12);
    } else if (session === "AM" && hour === "12") {
        hour = "00";
    }

    return hour + ":" + minute + ":" + second;
}










