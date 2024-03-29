console.log("Завдання: 1 ==============================");

// Функція task1 не приймає жодних аргументів
function task1() {
  /**
   * Функція `getData` симулює отримання даних з асинхронного джерела,такого як запит до бази даних або API.
   *
   *  data - вхідні дані.
   *  timeout - час в мілісекундах, який витрачається на отримання даних,за замовчуванням 2000мс.
   */
  function getData(data, timeout = 2000) {
    // Функція повертає новий проміс
    return new Promise((resolve, reject) => {
      // За допомогою setTimeout ми симулюємо затримку timeout, яка виникає при роботі з асинхронними джерелами даних
      setTimeout(() => {
        // Якщо об'єкт не пустий, ми викликаємо resolve з data
        if (Object.keys(data).length > 0) {
          resolve(data);
        } else {
          // Якщо об'єкт пустий, ми викликаємо reject з новим об'єктом Error("Об'єкт пустий")
          reject(new Error("Об'єкт пустий"));
        }
      }, timeout);
    });
  }
  // Ми викликаємо getData з об'єктом { name: "John", age: 30, city: "New York" } і часом очікування 2000
  getData({ name: "John", age: 30, city: "New York" })
    .then((data) => {
      // Ми обробляємо дані, повернуті промісом
      // У разі успіху виводимо в консоль дані
      console.log("Успішно отримані дані:", data);
    })
    .catch((error) => {
      // У разі помилки виводимо повідомлення помилки
      console.error("Помилка:", error.message);
    })
    .finally(() => {
      // Незалежно від того, завершилось виконання проміса успіхом чи ні виводимо в консоль "Завдання 1 завершено"
      console.log("Завдання 1 завершено");
    });
}
// Викликаємо функцію task1
task1();

// const loadFile2 = (filename2) =>
//   new Promise((resolve, reject) => {
//     console.log(`Завантаження файлу ${filename2}...`);

//     // reject("Error");

//     setTimeout(() => resolve(`Вміст файлу ${filename2}`), 2000);
//   });
