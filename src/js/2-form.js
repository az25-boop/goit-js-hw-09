// Оголошуємо об'єкт formData
const formData = {
  email: '',
  message: '',
};

// Функція для збереження даних у локальне сховище
function saveToLocalStorage(data) {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

// Функція для завантаження даних з локального сховища
function loadFromLocalStorage() {
  const savedData = localStorage.getItem('feedback-form-state');
  return savedData ? JSON.parse(savedData) : null;
}

// Отримуємо посилання на форму та її елементи
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// Відстежуємо подію input на формі
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  saveToLocalStorage(formData);
});

// Завантажуємо дані з локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const savedData = loadFromLocalStorage();
  if (savedData) {
    formData.email = savedData.email;
    formData.message = savedData.message;
    emailInput.value = savedData.email;
    messageInput.value = savedData.message;
  }
});

// Відстежуємо подію submit на формі
form.addEventListener('submit', event => {
  event.preventDefault();

  // Перевірка, чи заповнені всі поля
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  // Виведення об'єкта formData у консоль
  console.log(formData);

  // Очищення локального сховища, об'єкта formData та полів форми
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
