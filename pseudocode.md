# ALARM CLOCK

## About:
Create an alarm clock from scratch that runs all the time without refreshing

## INIT Goals: 
- Display current time in digital format in Hours:Minutes:Seconds along with MDY if possible
- Pick a time for alarm clock to function
- Make sure alarm refreshes without actually refreshing the page

### POSSIBLE INIT Extras:
- MDY
- Toggle between Normal time and Military time
- snooze button
- audible alert

# PSEUDOCODE:
## Procedural
1. BEGIN
2. function currentTime
    - Collecting all the children variables to create a working, accurate clock
3. setInterval
    - Acts as a check to properly time your alarm at 1000ms intervals
4. document.getElementById("setAlarmButton").addEventListener("click", function())
    - Pulls the alarm button from the HTML file through getElementById
    - Adds the click function of the alarm button from the HTML addEventListener
5. function setAlarmTime
    - combines the time variables, alarm variable, and alarm alert variable
## END
<br>

## Functional
- var date: serves as the base variable for date function. [^1]
    [^1]:var year, var month, var day, var hour, var minute, var second

- var time: Serves as the variable for the "Timer" function that displays the current time and AM/PM[^1]
    [^1]:var session: variable for AM/PM function

- var time2: Variable for the "time2" function that displays the date

- var alarmInput: Variable for combining the time input[^1], time tracking interval, and alert variable 
    [^1]: input type="time" id="alarmTime" which creates the input time box

- if (currentTime >= alarmTime): Trigger mechanism

- if (alarmInput === ""): Feedback if no time is entered
