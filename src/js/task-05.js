const inputEl = document.querySelector('#name-input')
const titleEl = document.querySelector('#name-output')

inputEl.addEventListener('input', (e) => {
    e.preventDefault;
    titleEl.textContent = inputEl.value;

})