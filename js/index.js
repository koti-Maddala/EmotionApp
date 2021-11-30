buttons = document.getElementsByClassName("emtBox");
for(let i =0;i<buttons.length;i++){
    buttons[i].onclick= ()=>{
        if(buttons[i].style.color == "rgb(121, 2, 206)"){
            buttons[i].style.color = ""
        buttons[i].style.borderRadius = ""
        buttons[i].style.borderColor = ""
        buttons[i].style.borderWidth = ""
        buttons[i].style.borderStyle = ""
        buttons[i].style.fontSize = ""
        }else{
        buttons[i].style.color = "rgb(121, 2, 206)"
        buttons[i].style.borderRadius = "10px"
        buttons[i].style.borderColor = "#7C4DFF"
        buttons[i].style.borderWidth = "2px"
        buttons[i].style.borderStyle = "solid"
        buttons[i].style.fontSize = "30px"
        }
    }
}

var header = document.getElementById("navBtns");
var btns = header.getElementsByClassName("navIcon");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
