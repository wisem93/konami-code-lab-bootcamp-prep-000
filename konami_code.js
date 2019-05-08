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


function init() {
  // your code here
  document.body.addEventListener('keydown', function(e) {
    const key = e.key;
    
    if (code[index] === key) {
      index++;
      
        if (index === code.length -1) {
          alert("You did it Morty");
          index = 0;
        }
      
    } else {
      index = 0;
    }
    
  });
}
