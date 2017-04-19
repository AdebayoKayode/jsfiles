/**
 * Created by joe on 4/16/17.
 */
 var  hideDisplay;
function showDisplay() {
     hideDisplay= document.getElementById('hide').style.display = "block";
}
function  hiddenDisplay() {
    hideDisplay=document.getElementById("hide").style.display = "none";
}
var display = [showDisplay, hiddenDisplay];
 var x = 0;
function next() {
    x++;
    if (x >= display.length) {
        x = 0;
    }
    return display[x]();
}
function prev() {
    x--;
    if (x < 0) {
        x = display.length - 1;
    }
    return display[x]();
}

console.log(next());