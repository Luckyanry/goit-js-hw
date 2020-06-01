/*
    В HTML есть пустой список ul#ingredients.
    Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
    после чего вставит все li за одну операцию в список ul.ingredients. 
    Для создания DOM-узлов используй document.createElement().
*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createList = ingredient => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = ingredient;
  return listItemRef;
};

const ingredientList = ingredients.map(ingredient => createList(ingredient));

const listRef = document.querySelector('#ingredients');
listRef.append(...ingredientList);

console.log(listRef);
