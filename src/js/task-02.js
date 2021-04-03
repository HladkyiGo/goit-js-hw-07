const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const liItem = document.createElement('li')
const parenUl = document.getElementById('ingredients')
parenUl.append(liItem)

ingredients.forEach(ingredient => {
    const liItem = document.createElement('li')
    liItem.textContent = ingredient;
    parenUl.append(liItem)
})
