// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой).
// Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.
// Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь
// хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.

// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение:
// 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

const credits = 23580;
const pricePerDroid = 3000;
let message;

let input = prompt(
  'Укажите количество дроидов, которые Вы желаете преобрести?',
);

if (input === null) {
  message = 'Отменено пользователем!';
} else if (input > 0) {
  input = Number(input);
  const totalPrice = input * pricePerDroid;
  const result = credits - totalPrice;

  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  } else if (input === 1) {
    message = `Вы купили ${input} дроид, на счету осталось ${result} кредитов.`;
  } else if (input >= 2 && input <= 4) {
    message = `Вы купили ${input} дроида, на счету осталось ${result} кредитов.`;
  } else {
    message = `Вы купили ${input} дроидов, на счету осталось ${result} кредитов.`;
  }
} else {
  message = 'Вы ввели некорректное значение!';
}

console.log(message);