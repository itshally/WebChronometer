var showHours = document.getElementById('h'),
    showMinutes = document.getElementById('m'), 
    showSeconds = document.getElementById('s'),
    showDate = document.getElementById('dateText'),
    showDay = document.getElementById('dayText'),
    showGreeting = document.getElementById('ampm');

function ShowRealTime(){
    var realTime = new Date();

    var hours = realTime.getHours(),
        minutes = realTime.getMinutes(),
        seconds = realTime.getSeconds(),
        month = realTime.getMonth(),
        day = realTime.getDate(),
        year = realTime.getFullYear(),
        dayOfWeek = realTime.getDay(),
        months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        //FIX THE AM AND PM
    if(hours > 12){
        showGreeting.innerHTML = "PM";
        showHours.innerHTML = hours - 12;
    }else{
        // hours = hours - 12
        showGreeting.innerHTML = "AM";
        showHours.innerHTML = hours + 12 - 12;
    }


    if(minutes < 60){
        if(minutes <= 9){
            minutes = '0' + minutes;
        }
        else{
            minutes = minutes;
        }

        showMinutes.innerHTML = minutes;
    }

    if(seconds < 60){
        if(seconds <= 9){
            seconds = '0' + seconds;
        }
        else{
            seconds = seconds;
        }

        showSeconds.innerHTML = seconds;
    }

    //this will show the the full date; mm.dd.yy
    showDate.innerHTML = months[month] + "." + day + "." + year;
    
    //this will show the day of the week
    showDay.innerHTML = days[dayOfWeek];
    
    setTimeout('ShowRealTime()', 0);
    
}

ShowRealTime();


