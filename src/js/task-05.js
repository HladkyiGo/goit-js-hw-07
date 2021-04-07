// const inputEl = document.querySelector('#name-input')
// const titleEl = document.querySelector('#name-output')

// inputEl.addEventListener('input', (e) => {
//     e.preventDefault;
//     titleEl.textContent = inputEl.value;
//     if (inputEl.value=== "") {
//         titleEl.textContent = span;

//     }
// })


const onInputs = document.querySelector("#name-input");
const onLabel = document.querySelector("#name-output");
onInputs.addEventListener("input", onInput);
const span = onLabel.textContent;
function onInput(event) {
  console.log(event.currentTarget.value);
  onLabel.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    onLabel.textContent = span;
  }
}
console.log(onLabel.textContent);