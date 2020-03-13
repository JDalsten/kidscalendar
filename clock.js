// Keeps track of the current time
const startTime = () => {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector("#clock").textContent = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
  }

  //Adds zero in front of numbers < 10
  const checkTime = (i) => {
    if (i < 10) {i = "0" + i};
    return i;
  }

