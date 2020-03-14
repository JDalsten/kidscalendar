

// Initialise clock on load
document.addEventListener("DOMContentLoaded", function(){
  startTime();
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




/* $(document).ready(function(){ 

  
  $("button[type='button']").on("click", function(){
    var txtboxval = $("input[type='text']").val();
    if(txtboxval == "" || txtboxval > 100){
      alert("Enter only number & number should be less than 100.");
      $("input[type='text']").val("");
    }else{
      if(txtboxval > 50){
        txtboxval = txtboxval-50;
        var val = 180/50;
        var fval = val*txtboxval;
        fval = fval + 180;
        $(".slice").css({"clip":"rect(auto, auto, auto, auto)"});
        $(".slice").append("<div class='bar'></div>");
        $(".fill").css({"transform":"rotate(180deg)"});
        $(".bar").css({"transform":"rotate("+fval+"deg)"});
        $(".no").text($("input[type='text']").val()+"%");
      }else{
        var val = 180/50;
        var fval = val*txtboxval;
        fval = fval;
        $(".slice").find(".bar").remove();
        $(".slice").css({"clip":"rect(0em, 1em, 1em, 0.5em)"});
        $(".fill").css({"transform":"rotate("+fval+"deg)"});
        $(".no").text($("input[type='text']").val()+"%");
      }
    }
  });
  
}); */