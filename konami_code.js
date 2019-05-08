const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

const body = document.getElementsByTagName('body');

body.addEventListener('click', function(event) {
  console.log('the page was clicked Morty!');
});

function init() {
  // your code here
  const key = e.key;
  
  if (key === codes[index]) {
    index++;
    
    if (index === codes.length) {
      alert("You must know the secret code!");
      
      index = 0;
    }
  } else {
    index = 0;
  }
}
