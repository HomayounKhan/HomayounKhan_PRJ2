// Analog Clock
const time = document.querySelector(".hours");
const secHand = document.querySelector(".second");
const minHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

for (let i = 1; i <= 60; i++) {
  if (i % 5 == 0) {
    time.innerHTML += "<div class='hour-number'><div>" + (i / 5) + "</div></div>";
    let hours = document.getElementsByClassName("hour-number");
    hours[hours.length - 1].style.transform = `translateX(-50%) rotate(${i*6}deg)`;
    hours[hours.length - 1].firstChild.style.transform = `rotate(${i*-6}deg)`;
  } else {
        time.innerHTML += "<div class='minute-bar'></div>";
    let bars = document.getElementsByClassName("minute-bar");
    bars[bars.length - 1].style.transform = `translateX(-50%) rotate(${i*6}deg)`;
    }
}

function startClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  let secDeg = seconds * (360 / 60) + minutes * 360;
  let minDeg = minutes * (360 / 60) + seconds / 12;
  let hourDeg = hours * (360 / 12) + (minutes / 12) * (360 / 60);
  secHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
  minHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}
setInterval(startClock, 1000);

// Digital Clock 
startClock();
function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();