var divs = document.getElementsByClassName('switch');
var i;

for(i=0;i<divs.length;i++) {
  divs[i].addEventListener("click", changeBg);
}

function changeBg() {
  if(this.classList.contains("bg1")) {
    this.classList.remove("bg1");
    this.classList.add("bg2");
  }
  else {
    this.classList.remove("bg2");
    this.classList.add("bg1");
  }
}
