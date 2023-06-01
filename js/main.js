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

        if(h == 0){
            h = 12;
        }

        if(h > 12){
            h = h - 12;
            session = "PM";
        }

    
















};