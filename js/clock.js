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
  adjustScheduleScroll(h * 1, m * 1);
  //adjustScheduleScroll(03,02);
  var t = setTimeout(startTime, 1000);
};

//Adds zero in front of numbers < 10
const checkTime = i => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

const adjustScheduleScroll = (hours, minutes) => {
  let timeInMinutes = hours * 60 + minutes;
  let amount = -(2000 / 1440) * timeInMinutes;
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
    sessionEleText.classList.add("sessionText")
    let today = document.querySelector("#today");
    today.appendChild(sessionEle);
    sessionEle.appendChild(sessionEleText);
    sessionEle.style.top = sessionLocation + 70; //the +70 is to compensate for padding
    sessionEle.style.height = sessionHeight-2;
    sessionEleText.textContent = sessions[i].summary;
  }
};
