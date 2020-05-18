// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного
// (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта
// в формате "имя":"кол-во задач".

const findBestEmployee = function (employees) {
  const allEmployes = Object.entries(employees);
  let bestEmployee = '';
  let bestResult = 0;

  for (const employee of allEmployes) {
    const name = employee[0];
    const productivity = employee[1];

    if (bestResult < productivity) {
      bestResult = productivity;
      bestEmployee = name;
    }
  }

  return bestEmployee;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
