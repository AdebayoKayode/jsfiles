/**
 * Created by joe on 4/18/17.
 */
const post = document.getElementById('post');

fetch('http://jsonplaceholder.typicode.com/albums/1/photos')
    .then(blob => blob.json()) // Fetch JSON
.then(data => console.log(data));
document.write(data[1]); // Grab the children

// Let's render our title to the page with numbers...
// 1.) blah blah blah
