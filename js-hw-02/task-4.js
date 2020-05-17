// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов
// и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

const formatString = function (string) {
  let newString = string.length > 40 ? string.slice(0, 41) + '...' : string;
  return newString;
};

// <======== ЕКСПЕРЕМЕНТИ ПО ПОШУКУ ОПТИМАЛЬНОГО РІШЕННЯ ==========>

// =============================== 1 ===============================
// const formatString = function (string) {
//   const newString = string.split('');
//   let stringLength = newString.length;

//   if (stringLength > 40) {
//     stringLength = newString.splice(41, 1000000, '...');
//     stringLength = newString.join('');
//     // console.log('object :>> ', newStringLength);
//   } else {
//     stringLength = string;
//   }
//   return stringLength;
// };

// =============================== 2 ===============================
// const formatString = function (string) {
//   let newString;
//   if (string.length > 40) {
//     newString = string.slice(0, 41) + '...';
//     return newString;
//   }
//   return string;
// };

console.log(formatString('Curabitur ligula sapien, tincidunt non.')); // вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')); // вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.')); // вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
); // вернется форматированная строка
