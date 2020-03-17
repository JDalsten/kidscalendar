

// Initialise functions on load
document.addEventListener("DOMContentLoaded", function(){
  updater();
  let timelineAnchor = document.querySelector(".currentTimeLineOffset");
  timelineAnchor.scrollIntoView();
});

const sessionRemaining = (percentage) => {
  let txtboxval = percentage;
  if (txtboxval > 50) {
    console.log("higsher");
    txtboxval = txtboxval-50;
    let val = 180/50;
    let fval = val*txtboxval;
    fval = fval + 180;
    let slice = document.querySelector(".slice");
    slice.style.clip = "rect(auto, auto, auto, auto)";
    if (slice.querySelector(".bar") === null) {
      let barClass = document.createElement("div");
    barClass.classList.add("bar");
    console.log(barClass);
    slice.appendChild(barClass);
    document.querySelector(".fill").style.transform = "rotate(180deg)";
    document.querySelector(".bar").style.transform = "rotate("+fval+"deg)";
    }
    else {
      document.querySelector(".fill").style.transform = "rotate(180deg)";
    document.querySelector(".bar").style.transform = "rotate("+fval+"deg)";
    }
    
  }
  else {
    console.log("lower");
    let val = 180/50;
    let fval = val*txtboxval;
    fval = fval;
    document.querySelector(".slice");
    let slice = document.querySelector(".slice");
    let bar = slice.querySelector(".bar");
    if (bar !== null) {
      bar.remove();
      slice.style.clip = "rect(0em, 1em, 1em, 0.5em)";
      document.querySelector(".fill").style.transform = "rotate("+fval+"deg)";
    } else {
      slice.style.clip = "rect(0em, 1em, 1em, 0.5em)";
      document.querySelector(".fill").style.transform = "rotate("+fval+"deg)";
    }
  }
}
