// Keeps track of the current time
const startTime = () => {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector("#clock").textContent = `${h}:${m}:${s}`;
  adjustScheduleScroll(h*1,m*1);
  //adjustScheduleScroll(03,02);
  var t = setTimeout(startTime, 1000);
}

//Adds zero in front of numbers < 10
const checkTime = (i) => {
  if (i < 10) { i = "0" + i };
  return i;
}

const adjustScheduleScroll = (hours, minutes) => {
  timeInMinutes = hours*60 + minutes;
  let amount = - (2000/1440) * timeInMinutes;
  let dayFormat = document.querySelectorAll(".dayFormat");
  let schedule = document.querySelector("#schedule");
  //schedule.style.height = 2300 + amount + "px";
  let currentTimeLineContainer = document.querySelector(".currentTimeLineContainer");
  currentTimeLineContainer.style.top = (amount-59.5)*-1;
  let currentTimeLine = document.querySelector(".currentTimeLine");
  currentTimeLine.textContent = `${checkTime(hours)}:${checkTime(minutes)}`;
  let i;
  for (i = 0; i < dayFormat.length; i++) {
   // dayFormat[i].style.transform = "translateY(" + amount + "px)";

   
  }
}
