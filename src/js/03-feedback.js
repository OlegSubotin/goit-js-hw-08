import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

let formData = {};

let formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector(".feedback-form input");
const textareaEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea()

function onFormSubmit(evt) {
    evt.preventDefault();
    const { elements: { email, message } } = evt.target;
    if (email.value === '' || message.value === '') { 
    return
    }
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    console.log('Форму отправил');
    evt.target.reset();
    formData = {};
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!savedData) {
    return
    }
    
    if (savedData.email) {
    formEl.email.value = savedData.email;
    }
    
    if (savedData.message) {
    formEl.message.value = savedData.message;
    }
}