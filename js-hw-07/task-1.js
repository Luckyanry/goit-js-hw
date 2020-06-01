/*  В HTML есть список категорий ul#categories. Напиши скрипт, который выполнит следующие операции.

    1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
    Получится 'В списке 3 категории.'.

    2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
    элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

    Например для первой категории получится:
      Категория: Животные
      Количество элементов: 4
*/

const numberOfCategories = document.querySelectorAll('.item');
console.log(`В списке ${numberOfCategories.length} категории.`);

const titleAndSumOfLi = numberOfCategories.forEach(element =>
  console.log(
    `Категория: ${element.querySelector('h2').textContent}
    Количество элементов: ${element.querySelectorAll('li').length}`,
  ),
);

// ================ Перший варіант. Частина 2 ==================
// const titleOfCategory = document.querySelectorAll('h2');

// const result = titleOfCategory.forEach(element =>
//   console.log(`Категория: ${element.textContent}`),
// );

// const numOfElem = document.querySelectorAll('h2 ~ ul');

// const elements = numOfElem.forEach(element =>
//   console.log(`Количество элементов: ${element.children.length}`),
// );

// ================ Другий варіант. Частина 2 ==================
// const titleOfCategory = numberOfCategories.forEach(element =>
//   console.log(`Категория: ${element.querySelector('h2').textContent}`),
// );

// const numOfElem = numberOfCategories.forEach(element =>
//   console.log(`Количество элементов: ${element.querySelectorAll('li').length}`),
// );
