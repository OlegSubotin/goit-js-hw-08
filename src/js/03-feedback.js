import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

let formData = {};

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector(".feedback-form input");
const textareaEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea()

function onFormSubmit(evt) {
    evt.preventDefault();
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

    if (savedData) {
        formData = savedData;
    }

    if (emailEl.value = savedData.email) {
        emailEl.value = savedData.email;
    } else {
        emailEl.value = emailEl.value;
    }

    if (textareaEl.value = savedData.message) {
        textareaEl.value = savedData.message;
    } else {
        textareaEl.value = textareaEl.value;
    }
}