//_______Function Video Play/Pause________
function vidplay(){
  if (document.getElementById("ppbtn").name=="play-circle-sharp") {
    document.getElementById("ppbtn").setAttribute("name", "pause-circle-sharp"); 
    document.getElementById('videodiv').play();
  }
  else{
    document.getElementById("ppbtn").setAttribute("name", "play-circle-sharp"); 
    document.getElementById('videodiv').pause();
  }
}

//_______Function Video Play/Pause on spacebar ________
document.addEventListener('keydown', (e)=> {
  if (e.code === 'Space') {
    e.preventDefault(); 
    vidplay();
  }
});



//_____Function For Video Display_______
function run(vsrc, msrc, x) {
  const videoDiv = document.getElementById("videodiv");
  const modelDiv = document.getElementById("modeldiv");
  const ppbtn = document.getElementById("ppbtn");
  const element = document.getElementById(x);
  const allContents = document.querySelectorAll('.content');
  
  if (videoDiv && modelDiv && ppbtn && element) {
    videoDiv.setAttribute("src", "videos/" + vsrc);
    modelDiv.setAttribute("src", "models/" + msrc);
    ppbtn.setAttribute("name", "play-circle-sharp");
    allContents.forEach(ele=> ele.style.opacity = 0.5); // making all opacity 0.5 except current
    element.style.opacity = 1;
  } else {
    console.error("One or more elements not found.");
  }
}

//+++++++++FUNCTION FOR CHANGEDV++++++++++
function changedv(){
  document.getElementById('videodiv').pause();
  document.getElementById("ppbtn").setAttribute("name", "play-circle-sharp"); 
  let txt = document.getElementById('btntext').innerHTML;
  if (txt == '3D VIEW') {
    document.getElementById("videodiv").style.display = "none";
    document.getElementById("modeldiv").style.display = "block";
    document.getElementById('btntext').innerHTML = "VIDEOS";
    document.getElementById('modelicon').setAttribute("name", "arrow-undo-sharp");
  }
  else {
    document.getElementById("videodiv").style.display = "block";
    document.getElementById("modeldiv").style.display = "none";
    document.getElementById('btntext').innerHTML = "3D VIEW";
    document.getElementById('modelicon').setAttribute("name", "cube");
  }
}
