//Завдання 1

// Оригінальна функція, яка повертає Promise.*зробимо асинх, щобпотім вивести порядок завдань
async function fetchFakeData() {
  const fakeData = {
    name: "John",
    age: 30,
  };
  return Promise.resolve(fakeData);
}

// Створюємо асинхронну функцію getData, яка використовує await для обробки Promise.
// Використовуємо try для обробки помилок
// Використовуємо await для очікування виконання Promise.
// Дані виводимо в консоль після отримання їх з Promise.
// Використовуємо catch для обробки будь-яких помилок, що виникли під час виконання Promise, та виводимо їх в консоль.

// Оголошуємо функцію як асинхронну.
async function getData() {
  try {
    // Викликаємо оригінальну функцію, яка повертає Promise, і очікуємо результат з допомогою await.
    const result = await fetchFakeData();
    // Виводимо дані в консоль після отримання їх з Promise.
    console.log("Дані:", result);
  } catch (error) {
    // Якщо сталась помилка при виконанні Promise, виводимо її в консоль.
    console.error("Сталась помилка:", error);
  }
}

// Розкоментуйте після виконання завданння
// console.log("Завдання: 1 ==============================");
// // Викликаємо нашу асинхронну функцію.
// getData();


//Завдання 2
// Функція getRandomNumberAfterSeconds, яка приймає один параметр - число секунд.
function getRandomNumberAfterSeconds(seconds) {
  // Повертаємо новий Promise
  return new Promise((resolve) => {
    // Використовуємо setTimeout для симуляції асинхронної операції.
    // Після "seconds" секунд, Promise буде виконано з результатом виконання функціх Math.random
    setTimeout(() => {
      resolve(Math.random());
    }, seconds * 1000);
  });
}

// Асинхронна функція logRandomNumberAfterSeconds, яка приймає один параметр - число секунд
// Використовуємо try для обробки помилок
// Використовуємо await, щоб "почекати", поки Promise від getRandomNumberAfterSeconds буде виконано.
// В функцію потрібно передати в seconds в якості аргументу
// Результат виконання функції присвоюється константі randomNumber.
// Виводимо отримане випадкове число в консоль
// Якщо сталася помилка під час виконання Promise, виводимо її в консоль.

// Оголошуємо функцію як асинхронну.
async function logRandomNumberAfterSeconds(seconds) {
  try {
    // Викликаємо асинхронну функцію, яка повертає Promise, і очікуємо результат з допомогою await.
    const randomNumber = await getRandomNumberAfterSeconds(seconds);
    // Виводимо отримане випадкове число в консоль.
    console.log("Випадкове число:", randomNumber);
  } catch (error) {
    // Якщо сталась помилка при виконанні Promise, виводимо її в консоль.
    console.error("Сталась помилка:", error);
  }
}

// // Розкоментуйте після виконання завданння
// console.log("Завдання: 2 ==============================");
// // Викликаємо нашу асинхронну функцію, передаючи кількість секунд у якості аргументу (наприклад, 3 секунди).
// logRandomNumberAfterSeconds(3);


//Завдання 3
// Асинхронна функція getDataFromUrl, яка приймає один параметр - URL
async function getDataFromUrl(url) {
  try {
    // Використовуємо fetch для відправки GET-запиту на заданий URL.
    const response = await fetch(url);

    // Перевіряємо, чи є відповідь вдалою за допомогою властивості "ok".
    if (!response.ok) {
      throw new Error("Сталась помилка під час отримання даних.");
    }

    // Конвертуємо відповідь у формат JSON.
    const data = await response.json();

    // Виводимо дані в консоль.
    console.log("Дані:", data);
  } catch (error) {
    // Виводимо помилки в консоль, якщо вони є.
    console.error("Сталась помилка:", error);
  }
}

// // Розкоментуйте після виконання завданння
// console.log("Завдання: 3 ==============================");
// getDataFromUrl("https://swapi.dev/api/people/1");

//Завдання 4
// Асинхронна функція, яка приймає три параметри - URL, дані для відправки та токен авторизації
async function postDataWithAuth(url, data, authToken) {
  try {
    // Використовуємо fetch для відправки POST-запиту на заданий URL.
    const response = await fetch(url, {
      method: "POST", // Вказуємо метод запиту POST.
      headers: {
        "Content-Type": "application/json", // Встановлюємо заголовок "Content-Type" зі значенням "application/json".
        Authorization: authToken, // Встановлюємо заголовок "Authorization" з переданим токеном авторизації.
      },
      body: JSON.stringify(data), // Передаємо дані в тілі запиту, які перед цим перетворили в JSON.
    });

    // Перевіряємо, чи є відповідь вдалою за допомогою властивості "ok".
    if (!response.ok) {
      throw new Error("Сталась помилка під час відправки даних.");
    }

    // Конвертуємо відповідь у формат JSON.
    const responseData = await response.json();

    // Виводимо відповідь в консоль.
    console.log("Відповідь:", responseData);
  } catch (error) {
    // Виводимо помилки в консоль, якщо вони є.
    console.error("Сталась помилка:", error);
  }
}

// Розкоментуйте після виконання завданння
// console.log("Завдання: 4 ==============================");
// postDataWithAuth(
//   "https://petstore.swagger.io/v2/store/order",
//   {
//     id: 0,
//     petId: 0,
//     quantity: 0,
//     shipDate: "2023-07-23T19:28:06.229Z",
//     status: "placed",
//     complete: true,
//   },
//   "fsdodfa8sdg76adtf687ya8rufia8d7fasy6g"
// );


//Завдання 5
// Створюємо асинхронний генератор asyncGenerator, який виробляє числа з паузою в одну секунду.
// "async function*" означає, що це асинхронний генератор.
async function* asyncGenerator() {
  let i = 0;//  Змінна "i" ініціалізована значенням 0 і буде збільшуватися на 1 при кожній ітерації.
  // Цикл "while (true)" - це безкінечний цикл, який продовжуватиме виконуватися, поки його не зупинять зовні.
  while (true) { 
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Затримка 1 секунда
    yield i++; // Віддаємо значення лічильника та збільшуємо його на один
  }
}


// Використовуємо асинхронний генератор та записуємо його значення в константу gen
//* Створюємо асинхрону функцію printFiveItems
async function printFiveItems() {
  const gen = asyncGenerator(); // Використовуємо асинхронний генератор та записуємо його значення в константу gen
 
//* Використовуємо ключові слова "for await" для ітерації по асинхронному генератору
  for await (const value of gen) {// Перебираємо значення gen
    console.log(value); // Виводимо в консоль поточне значення
    if (value === 4) break; // Зупиняємо цикл після виведення п'яти чисел (від 0 до 4).
  }
}

// Розкоментуйте після виконання завданння
// console.log("Завдання: 5 ==============================");
// printFiveItems();
// ----------------------------------------------------------------
//Завдання 6 

// Функція, яка симулює витягування даних з бази даних
async function getDataFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з бази даних");
    }, 1000);
  });
}

// Функція, яка симулює отримання даних з API
async function getDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з API");
    }, 800);
  });
}

// Функція, яка симулює отримання даних з кешу
async function getDataFromCache() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з кешу");
    }, 600);
  });
}

// Оголошуємо асинхронну функцію-генератор з ім'ям gatherData
async function* gatherData() {
  // Використовуємо try для обробки помилок
  try {
    const dbData = await getDataFromDB(); // Викликаємо getDataFromDB() і чекаємо, поки вона завершиться.
    yield dbData; // Використовуємо yield, щоб повернути значення dbData.
    // Результат роботи функції зберігаємо у змінну dbData

    const apiData = await getDataFromAPI(); // Те саме для getDataFromAPI().
    // результат зберігаємо в apiData
    yield apiData;

    const cacheData = await getDataFromCache(); // Те саме для getDataFromCache().
    yield cacheData; 
   // результат зберігаємо в cacheData
   
  } catch (error) {
    console.error("Сталась помилка:", error); // Виводимо помилки в консоль, якщо вони є.
  }
}

// Створюємо асинхрону функцію displayData
async function displayData() {
  const gen = gatherData(); // Створюємо екземпляр генератора gatherData.

  // Три рази перебираємо значення генератора та виводимо їх в консоль.
  for await (const value of gen) {
    console.log(value);
  }
}

// Розкоментуйте після виконання завданння
// console.log("Завдання: 6 ==============================");

// displayData();

//Завдання 7
// Створюємо генератор countdownGenerator, який створює послідовність чисел від вказаного значення до 0, має параметр start
function* countdownGenerator(start) {
  let count = start;// стартове значенням параметра =start
  
  while (count >= 0) {
    yield count; // Використовуємо yield, щоб повернути поточне значення лічильника.
    count--; // Зменшуємо лічильник на 1.
  }
}


// console.log("Завдання: 7 ==============================");

// Створюємо екземпляр генератора countdown з лічильником 5.
// const countdown = countdownGenerator(5);

// // Запускаємо генератор та отримуємо перше значення, яке записуємо в змінну nextValue.
// let nextValue = countdown.next();

// // Цикл while, що виводить значення з генератора, та працює поки генератор не буде вичерпаним.
// while (!nextValue.done) {
//   // Якщо властивість done == false, генератор ще має значення для повернення.
//   console.log(nextValue.value); // Виводимо поточне значення.
//   nextValue = countdown.next(); // Отримуємо наступне значення з генератора.
// }



// ♥♥♥♥ результати задань по порядку їх виконання//
// результати усіх завдань впорядковано.Асинх ф-ція для кожного результату
async function runTask1() {
  console.log("Завдання: 1 ==============================");
  await getData();
}


async function runTask2() {
  console.log("Завдання: 2 ==============================");
  await logRandomNumberAfterSeconds(3);
}

async function runTask3() {
  console.log("Завдання: 3 ==============================");
  await getDataFromUrl("https://swapi.dev/api/people/1");
}

async function runTask4() {
  console.log("Завдання: 4 ==============================");
  await postDataWithAuth(
    "https://petstore.swagger.io/v2/store/order",
    {
      id: 0,
      petId: 0,
      quantity: 0,
      shipDate: "2023-07-23T19:28:06.229Z",
      status: "placed",
      complete: true,
    },
    "fsdodfa8sdg76adtf687ya8rufia8d7fasy6g"
  );
}

async function runTask5() {
  console.log("Завдання: 5 ==============================");
  await printFiveItems();
}

async function runTask6() {
  console.log("Завдання: 6 ==============================");
  await displayData();
}

async function runTask7() {
  console.log("Завдання: 7 ==============================");
  const countdown = countdownGenerator(5);
  let nextValue = countdown.next()
while (!nextValue.done) {
  // Якщо властивість done == false, генератор ще має значення для повернення.
  console.log(nextValue.value); // Виводимо поточне значення.
  nextValue = countdown.next(); // Отримуємо наступне значення з генератора.
 
}
  }
async function runAllTasks() {
  try {
    await runTask1();
    await runTask2();
    await runTask3();
    await runTask4();
    await runTask5();
    await runTask6();
    await runTask7();
  } catch (error) {
    console.error("Сталась помилка:", error);
  }
}

runAllTasks();

