// selector
const main = document.getElementById('body');
const plus = document.getElementById('plusButton');
const input = document.getElementById('input');

console.log(plus);

// event listener
plus.addEventListener('click', () => {
  h1.innerText = Number(h1.innerText) + Number(input.value);
  input.value = 0;
});

// element creator
const h1 = document.createElement('h1');
h1.innerText = 0;

//append
main.appendChild(h1);
