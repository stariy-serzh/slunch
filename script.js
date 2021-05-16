const windowInnerWidth = document.documentElement.clientWidth;
const slidePosition = ["0", "-100", "-200", "-300", "-400"];
let currentSlide = 0;

function slideRigth() {
  if (windowInnerWidth <= 1220) {
    currentSlide++;
    if(currentSlide >= 0 && currentSlide <= 4){
        document.getElementById("scroll").style.transform =
      "translate(" + slidePosition[currentSlide] + "%)";
    }else{
        currentSlide = 4;
    }
    if (currentSlide === 4) {
      document
        .getElementById("start-widget-nav-i left")
        .classList.remove("inactive");
      document
        .getElementById("start-widget-nav-i left")
        .classList.add("active");
      document
        .getElementById("start-widget-nav-i rigth")
        .classList.remove("active");
      document
        .getElementById("start-widget-nav-i rigth")
        .classList.add("inactive");
    } else {
      if (currentSlide > 0) {
        document
          .getElementById("start-widget-nav-i left")
          .classList.remove("inactive");
        document
          .getElementById("start-widget-nav-i left")
          .classList.add("active");
      }
    }
    document.getElementById("wrapper").style.backgroundPosition =
      "" + -slidePosition[currentSlide] + "%" + " 114%";
  } else {
    document.getElementById("scroll").style.transform = "translate(-24%)";
    document
      .getElementById("start-widget-nav-i left")
      .classList.remove("inactive");
    document.getElementById("start-widget-nav-i left").classList.add("active");
    document
      .getElementById("start-widget-nav-i rigth")
      .classList.remove("active");
    document
      .getElementById("start-widget-nav-i rigth")
      .classList.add("inactive");
  }
}

function slideLeft() {
  if (windowInnerWidth <= 1220) {
    currentSlide--;
    if(currentSlide >= 0 && currentSlide <= 4){
        document.getElementById("scroll").style.transform =
      "translate(" + slidePosition[currentSlide] + "%)";
    }else{
        currentSlide = 0;
    }
    if (currentSlide === 0) {
      document
        .getElementById("start-widget-nav-i left")
        .classList.remove("active");
      document
        .getElementById("start-widget-nav-i left")
        .classList.add("inactive");
      document
        .getElementById("start-widget-nav-i rigth")
        .classList.remove("inactive");
      document
        .getElementById("start-widget-nav-i rigth")
        .classList.add("active");
        currentSlide = 0;
    }else{
        if(currentSlide < 4){
          document
            .getElementById("start-widget-nav-i rigth")
            .classList.remove("inactive");
          document
            .getElementById("start-widget-nav-i rigth")
            .classList.add("active");
        }
    }
    document.getElementById("wrapper").style.backgroundPosition =
      "" + -slidePosition[currentSlide] + "%" + " 114%";
  } else {
    document.getElementById("scroll").style.transform = "translate(0%)";
    document
      .getElementById("start-widget-nav-i left")
      .classList.remove("active");
    document
      .getElementById("start-widget-nav-i left")
      .classList.add("inactive");
    document
      .getElementById("start-widget-nav-i rigth")
      .classList.remove("inactive");
    document.getElementById("start-widget-nav-i rigth").classList.add("active");
    document.getElementById("wrapper").style.backgroundPosition = "0% 114%";
  }
}
