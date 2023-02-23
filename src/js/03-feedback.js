var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[type="email"]');
const messageEl = document.querySelector('textarea[name="message"]');

function setInfo() {
  if (localStorage.getItem('feedback-form-state') === null) {
    emailEl.value = '';
    messageEl.value = '';
  } else {
    emailEl.value = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).email;
    messageEl.value = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).message;
  }
}
setInfo();

formEl.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({ email: emailEl.value, message: messageEl.value })
    );
  }, 500)
);

formEl.addEventListener('submit', e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  emailEl.value = '';
  messageEl.value = '';
});
