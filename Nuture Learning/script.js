var x = document.getElementById("vd-play-btn");
var y = document.getElementById("play-video");

function playVideo(){
  y.style.display = "flex";
  x.style.display = "flex";
}

function close(){
  y.style.display = "none";
  x.style.display = "none";
}