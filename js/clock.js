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
  let timeInMinutes = hours*60 + minutes;
  let amount = - (2000/1440) * timeInMinutes;
  let dayFormat = document.querySelectorAll(".dayFormat");
  let schedule = document.querySelector("#schedule");
  let currentTimeLineContainer = document.querySelector(".currentTimeLineContainer");
  currentTimeLineContainer.style.top = (amount-59.5)*-1;
  let currentTimeLine = document.querySelector(".currentTimeLine");
  currentTimeLine.textContent = `${checkTime(hours)}:${checkTime(minutes)}`;
}

const dailySessions = (sessions) => {
  let i;
  for (i = 0; i < sessions.length; i++) {
    let dumDate = sessions[i].start.dateTime;
  let dumHour = Number(dumDate.substr(11, 2));
  let dumMin = Number(dumDate.substr(14, 2));

  let timeInMinutes = dumHour*60 + dumMin;
  let sessionLocation = (2000/1440) *timeInMinutes ;
  let sessionEle = document.createElement("DIV");
  sessionEle.classList.add("session");
  let today = document.querySelector("#today");
  today.appendChild(sessionEle);  
  sessionEle.style.top = (sessionLocation+70); //the +70 is to compensate for padding
    
  }
  
}


