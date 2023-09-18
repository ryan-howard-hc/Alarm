

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
function snoozeAlarm() {
    if (isAlarmPlaying) {
        alarmSound.pause();
        alarmSound.currentTime = 0;
        isAlarmPlaying = false;
        console.log("Alarm snoozed for 5 minutes.");
        
        setTimeout(function () {
            playAlarmSound();
        }, 300000); 
    }
}



var isAnalogClockVisible = false; 

function toggleAnalogClock() {
    var analogClock = document.getElementById('analogClock');
    var digitalClock = document.getElementById('Timer');

    if (isAnalogClockVisible) {
        analogClock.style.display = 'none';
        digitalClock.style.display = 'block';
    } else {
        digitalClock.style.display = 'none';
        analogClock.style.display = 'block';
    }

    isAnalogClockVisible = !isAnalogClockVisible; 
}


var isMilitaryTime = false; // Default to 12-hour format

function toggleMilitaryTime() {
    isMilitaryTime = !isMilitaryTime; // Toggle the state
    currentTime(); // Update the displayed time immediately
}

function currentTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // 1-12 (January is 0)
    var day = date.getDate(); // 1-31
    var hour = date.getHours(); // 0-23
    var minute = date.getMinutes(); // 0-59
    var second = date.getSeconds(); // 0-59

    // Check if military time is enabled, and format accordingly
    if (!isMilitaryTime) {
        var session = "AM";
        if (hour >= 12) {
            session = "PM";
            if (hour > 12) {
                hour = hour - 12;
            }
        }
        hour = (hour < 10) ? "0" + hour : hour;
        minute = (minute < 10) ? "0" + minute : minute;
        second = (second < 10) ? "0" + second : second;
        var time = hour + ":" + minute + ":" + second + " " + session;
    } else {
        hour = (hour < 10) ? "0" + hour : hour;
        minute = (minute < 10) ? "0" + minute : minute;
        second = (second < 10) ? "0" + second : second;
        var time = hour + ":" + minute + ":" + second + " ";
    }

    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    var time2 = month + "/" + day + "/" + year;

    document.getElementById("Timer").innerText = time;
    document.getElementById("Timer").textContent = time;
    document.getElementById("time2").innerText = time2;
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


console.log("Script loaded");

document.getElementById("toggleAnalogClock").addEventListener("click", function() {
    toggleAnalogClock();
});