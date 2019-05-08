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

page.addEventListener('click', function(event) {
 var page = document.body;

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
