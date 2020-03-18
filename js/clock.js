let todaysSessions;
let currentActiveSession = {
  sessionStartSec: null,
  sessionEndSec: null,
  id: null,
  summary: null,
  theme: null
};

const updater = () => {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  let timeInSec = h * 60 * 60 + m * 60 + s;
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector("#clock").textContent = `${h}:${m}:${s}`;
  adjustScheduleScroll(h * 1, m * 1, s * 1, timeInSec);
  //adjustScheduleScroll(03,02);
  if (todaysSessions == null) {
    console.log("waiting");
  } else {
    checkForActiveSession(timeInSec);
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

const checkForActiveSession = timeSec => {
  let i;
  for (i = 0; i < todaysSessions.length; i++) {
    if (todaysSessions[i].sessionStartSec < timeSec) {
      
      if (todaysSessions[i].sessionEndSec > timeSec) {
        updateActiveSession(i, timeSec);
      }
    
    }
  }
};

const updateActiveSession = (index, timeSec) => {
  if (todaysSessions[index].id !== currentActiveSession.id) {
    currentActiveSession = todaysSessions[index];
    
      switch (todaysSessions[index].theme) {
        case "food":
          document.querySelector(".c100").style.backgroundImage = "url(images/lunch.svg)";
          break;
        
          case "education":
            document.querySelector(".c100").style.backgroundImage = "url(images/student.svg)";
            break;

            case "cartoons":
          document.querySelector(".c100").style.backgroundImage = "url(images/television.svg)";
          break;

          case "play":
          document.querySelector(".c100").style.backgroundImage = "url(images/lego.svg)";
          break;

          case "plnoneay":
          document.querySelector(".c100").style.backgroundImage = "url(images/sun.svg)";
          break;
      
        default:
          document.querySelector(".c100").style.backgroundImage = "url(images/sun.svg)";
          break;
      }
  } else {
    let sessionLength =
      currentActiveSession.sessionEndSec - currentActiveSession.sessionStartSec;
    let sessionProgress = timeSec - currentActiveSession.sessionStartSec;
    let sessionProgressPercentage = (sessionProgress / sessionLength) * 100;
    sessionRemaining(sessionProgressPercentage);
  }
};

const adjustScheduleScroll = (hours, minutes, seconds, timeSec) => {
  let amount = -(2000 / 86400) * timeSec;
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
  let sessionInfo = [];
  let i;
  for (i = 0; i < sessions.length; i++) {
    let startDate = sessions[i].start.dateTime;
    let startHour = Number(startDate.substr(11, 2));
    let startMin = Number(startDate.substr(14, 2));
    let startSec = Number(startDate.substr(17, 2));
    let endDate = sessions[i].end.dateTime;
    let endHour = Number(endDate.substr(11, 2));
    let endMin = Number(endDate.substr(14, 2));
    let endSec = Number(endDate.substr(17, 2));
    let startTimeInSeconds = startHour * 60 * 60 + startMin * 60 + startSec;
    let endTimeInSeconds = endHour * 60 * 60 + endMin * 60 + endSec;
    let duration = endTimeInSeconds - startTimeInSeconds;
    let sessionHeight = (2000 / 86400) * duration;
    let sessionLocation = (2000 / 86400) * startTimeInSeconds;
    let sessionEle = document.createElement("DIV");
    let sessionEleText = document.createElement("P");
    let sessionTheme;
    sessionEle.classList.add("session");
    sessionEleText.classList.add("sessionText");
    let today = document.querySelector("#today");
    today.appendChild(sessionEle);
    sessionEle.appendChild(sessionEleText);
    sessionEle.style.top = sessionLocation + 70; //the +70 is to compensate for padding
    sessionEle.style.height = sessionHeight - 2;
    sessionEleText.textContent = sessions[i].summary;
    lwcSummary = sessions[i].summary.toLowerCase();
    if (
      lwcSummary.includes("morgenmad") ||
      lwcSummary.includes("formiddagsmad") ||
      lwcSummary.includes("frokost") ||
      lwcSummary.includes("aftenssmad") ||
      lwcSummary.includes("eftermiddagsmad")
    ) {
      sessionTheme = "food";
    } else if (lwcSummary.includes("skole") || lwcSummary.includes("opgaver")) {
      sessionTheme = "education";
    } else if (
      lwcSummary.includes("tegnefilm") ||
      lwcSummary.includes("disneysjov")
    ) {
      sessionTheme = "cartoons";
    } else if (
      lwcSummary.includes("leg") ||
      lwcSummary.includes("lego") ||
      lwcSummary.includes("lego")
    ) {
      sessionTheme = "play";
    } else {
      sessionTheme = "none";
    }
    sessionEle.classList.add("theme_" + sessionTheme);
    sessionInfo.push({
      sessionStartSec: startTimeInSeconds,
      sessionEndSec: endTimeInSeconds,
      id: sessions[i].id,
      summary: sessions[i].summary,
      theme: sessionTheme
    });
  }
  return setDailySession(sessionInfo);
};

const setDailySession = sessions => {
  todaysSessions = sessions;
};
