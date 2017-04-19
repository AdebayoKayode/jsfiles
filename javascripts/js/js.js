/**
 * Created by joe on 4/18/17.
 */
//OBJECT CONSTRUCTOR
var msg = document.getElementById('message');
function Car(make,model,color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.display = function () {
        msg.innerHTML += "<p> Your car is a " + this.color + " " + this.make + " " + this.model + "</p>";
    }
}
var car1 = new Car("ford", "mustang", "black");
var car2  = new Car("Bugatti", "verhon", "grey");
car1.display();
