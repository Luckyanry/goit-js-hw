/*
    Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
      Создай переменную counterValue в которой будет хранится текущее значение счетчика.
      Создай функции increment и decrement для увеличения и уменьшения значения счетчика
      Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/

const counterValue = document.querySelector('#value');

const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');

function decrement() {
  counterValue.textContent -= 1;
}

function increment() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}

buttonDec.addEventListener('click', decrement);
buttonInc.addEventListener('click', increment);
