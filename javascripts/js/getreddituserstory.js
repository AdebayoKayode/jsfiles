var xhttp = new XMLHttpRequest();
xhttp.open("GET", "http://jsonplaceholder.typicode.com/albums/1/photos");
var obj = JSON.constructor(xhttp);
console.log(obj);