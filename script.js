let clockH = document.querySelector('.clock-hours');
let clockM = document.querySelector('.clock-minutes');
let clockS = document.querySelector('.clock-seconds');
let countdownDays = document.querySelector('.countdown_days');
let countdownHours = document.querySelector('.countdown_hours');
let countdownMinutes = document.querySelector('.countdown_minutes');
let countdownSeconds = document.querySelector('.countdown_seconds');

//Converting everything into milliseconds:

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let finalDate  = new Date('January, 2023 00:00:00');

// Updating 'Clock' and 'Countdown' time instantly (every 1000 milliseconds) -  before date/time set in the html code:

let startClock = () => {
    updateTime(); 
    updateCountdown(); 
    setInterval(() => {
        updateTime();
        updateCountdown();
    }, 1000);
}

// Updating the time on the 'Clock':

let updateTime = () => { 
    let now = new Date(); // to get the current time
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

//Rotating the clock to necessary degrees: (circle is 360 deg which is evenly divided by 12 hours; 60 minutes/seconds):

    clockH.style.transform = `rotate(${360 / 12 * hours}deg)`; 
    clockM.style.transform = `rotate(${360 / 60 * minutes}deg)`; 
    clockS.style.transform = `rotate(${360 / 60 * seconds}deg)`;
}

//Updating time on the 'Countdown': 

let updateCountdown = () => { 
    let now = new Date(); //to get the current date
    let diff = finalDate - now; //to calculate the difference between final date and now
    let diffObj = convertMillisToDHMS(diff); 

//Passing the values of the following variables to countdown days/hours/minutes/seconds:

//TERNARY operator = condition ? exprIfTrue: exprIfFalse;

    countdownDays.textContent = diffObj.days >= 10 ? diffObj.days : '0' + diffObj.days; 
    countdownHours.textContent = diffObj.hours >= 10 ? diffObj.hours : '0' + diffObj.hours;
    countdownMinutes.textContent = diffObj.minutes >= 10 ? diffObj.minutes : '0' + diffObj.minutes;
    countdownSeconds.textContent = diffObj.seconds >= 10 ? diffObj.seconds : '0' + diffObj.seconds;
}

//Converting 'Countdown' time into milliseconds:

let convertMillisToDHMS = (millis) => {
    let days = Math.floor(millis / day); //to get no of days in whole number
    let hours = Math.floor(millis % day / hour);
    let minutes = Math.floor(millis % hour / minute);
    let seconds = Math.floor(millis % minute / second);
    return {days, hours, minutes, seconds}; //to be able to use the values of these variables in the "updateCountdown" function
}

startClock();

//1 second = 1,000 milliseconds;
//1 minute = 60 seconds = 60,000 milliseconds;
//1 hour = 60 minutes = 3,600,000 milliseconds;
//1 day = 24 hours = 86,400,000 milliseconds;