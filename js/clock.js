let todaysSessions;


const updater = () => {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  let timeInMin = h * 60 + m;
  document.querySelector("#clock").textContent = `${h}:${m}:${s}`;
  adjustScheduleScroll(h * 1, m * 1, timeInMin);
  //adjustScheduleScroll(03,02);
  if (userSessions == null) {
  console.log("waiting")
} else {
  checkForActiveSession(timeInMin);
}
  var t = setTimeout(updater, 1000);
};

//Adds zero in front of numbers < 10
const checkTime = i => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

const checkForActiveSession = (timeMin) => {
  console.log("timeMin:", timeMin)
  let i;
  for (i = 0; i < userSessions.length; i++) {
    
  }
}

const adjustScheduleScroll = (hours, minutes, timeMin) => {
  let amount = -(2000 / 1440) * timeMin;
  let dayFormat = document.querySelectorAll(".dayFormat");
  let schedule = document.querySelector("#schedule");
  let currentTimeLineContainer = document.querySelector(
    ".currentTimeLineContainer"
  );
  currentTimeLineContainer.style.top = (amount - 59.5) * -1;
  let currentTimeLine = document.querySelector(".currentTimeLine");
  currentTimeLine.textContent = `${checkTime(hours)}:${checkTime(minutes)}`;
};

const dailySessions = sessions => {
  
  let sessionHours = [];
  let i;
  for (i = 0; i < sessions.length; i++) {
    let startDate = sessions[i].start.dateTime;
    let startHour = Number(startDate.substr(11, 2));
    let startMin = Number(startDate.substr(14, 2));
    let endDate = sessions[i].end.dateTime;
    let endHour = Number(endDate.substr(11, 2));
    let endMin = Number(endDate.substr(14, 2));
    let startTimeInMinutes = startHour * 60 + startMin;
    let endTimeInMinutes = endHour * 60 + endMin;
    let duration = endTimeInMinutes - startTimeInMinutes;
    let sessionHeight = (2000 / 1440) * duration;
    let sessionLocation = (2000 / 1440) * startTimeInMinutes;
    let sessionEle = document.createElement("DIV");
    let sessionEleText = document.createElement("P");
    sessionEle.classList.add("session");
    sessionEleText.classList.add("sessionText");
    let today = document.querySelector("#today");
    today.appendChild(sessionEle);
    sessionEle.appendChild(sessionEleText);
    sessionEle.style.top = sessionLocation + 70; //the +70 is to compensate for padding
    sessionEle.style.height = sessionHeight - 2;
    sessionEleText.textContent = sessions[i].summary;
    sessionHours.push({
      sessionStartMin: startTimeInMinutes,
      sessionEndMin: endTimeInMinutes,
      summary: sessions[i].summary
    });
  }
  return setDailySession(sessionHours);
};

const setDailySession = (sessions) => {
  todaysSessions = sessions;
};



