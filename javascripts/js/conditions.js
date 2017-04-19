/**
 * Created by joe on 4/10/17.
 */
 /*var msg =  document.getElementById('message');
 console.log(msg);
 var name = prompt("What is your name: ");
 var outPut = "welcome "+ " " + name;
if (name === "") {
    outPut = "Please enter a name";
}
else {
    outPut = "Welcome" + " " + name;
}
 msg.textContent = outPut;*/
 //FOR LOOPS

 /*var msg = document.getElementById('message');
 var num =  prompt("Give me a number", 10);
 var outPut = 1;
if (num.length === 0 || isNaN(num)) {
    msg.textContent = "Please enter a valid number";
}
else {
    for (var i = 2; i <= num; i++) {
        outPut *= i;

    }

    msg.textContent = num + "!=" + " " + outPut;
}*/

 //WHILE LOOPS
var msg = document.getElementById('message');
var num = prompt("Bank details: ");
//while (num.length < 8) {
//    num = "0" + num;
//}
while (num.length < 8)
 {
    num = "0" + num;
}
msg.textContent = num;



//for in loops

/*var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var items = nums.length;
//console.log(items);
var total = 0;
    for (var i = 0; i < items; i++) {
    total = total + nums[i];
}
//console.log(total);
var  mean = total / items;
    alert(mean);*/