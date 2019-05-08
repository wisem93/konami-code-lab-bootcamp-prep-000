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
    console.log(key);
    
    if (code[index] === key) {
      ++index;
    } else {
      index = 0;
    }
    
  });
}
