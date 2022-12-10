//Form validation

import { backdropRef, modalFormRef } from './modal-open';
// const nameInputRef = document.getElementById('name-input');
// console.log(nameInputRef);

const submitBtnRef = document.getElementById('form-submit');
console.log(submitBtnRef);

submitBtnRef.addEventListener('click', onSubmitClickHandler);

function onSubmitClickHandler(e) {
  e.preventDefault();

  let submitObj = {};

  const fieldsRef = modalFormRef.querySelectorAll('.field');
  for (let i = 0; i < fieldsRef.length; i++) {
    const element = fieldsRef[i];
    if (element.value === '') {
      alert('The field cannot be empty');
    }
    submitObj[element.name] = element.value;
    console.log(submitObj);
    element.value = '';
  }

  return submitObj;
}
