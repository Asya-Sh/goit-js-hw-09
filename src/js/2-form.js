const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

form.addEventListener('submit', onSubmitBtn);
form.addEventListener('input', onInputData);
document.addEventListener('DOMContentLoaded', renderPage);

//  Функція для обробки подачі форми
function onSubmitBtn (e){
    e.preventDefault();
    const {email, message} = e.currentTarget.elements;
      const userData = {
        email: email.value.trim(), 
        message: message.value.trim()};
      
       if (!userData.email|| !userData.message) return console.log(userData);
    
    e.target.reset();
    localStorage.removeItem(LS_KEY);
  };

//   Функція для обробки введення даних в форму
  function onInputData (e) {
    const {email, message} = e.currentTarget.elements;
    if (!email.value.trim() && !message.value.trim()) return;

    const userData = {
        email: email.value.trim(),
        message: message.value.trim(),
    };
    
    saveToLS(LS_KEY, userData);
   };


   function renderPage() {
    const data = loadFromLS(LS_KEY);
    form.elements.email.value = data?.email || '';
    form.elements.message.value = data?.message || '';
  };
 
    
   function saveToLS(key, value) {
     localStorage.setItem(key, JSON.stringify(value));
   };
   
   function loadFromLS(key) {
     try {
       return JSON.parse(localStorage.getItem(key)) || {};
     } catch {
       return {};
     }
   };

   