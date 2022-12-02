import {
  backdropRef,
  onCloseBtnClick,
  closeModalEscape,
  closeModalClikcOutside,
} from './modal-open';

const emailInputBtnRef = document.getElementById('#email-modal');
const modalFormRef = document.querySelector('.form');

emailInputBtnRef.addEventListener('click', onEmailFormClickHandler);
console.log(backdropRef);

function onEmailFormClickHandler(e) {
  backdropRef.classList.remove('is-hidden');

  const closeIconRef = document.getElementById('#modal-close');
  closeIconRef.addEventListener('click', onCloseBtnClick);
  // Close modal to Escape
  document.addEventListener('keydown', closeModalEscape);
  //Сlose modal on click outside
  document.addEventListener('click', closeModalClikcOutside);

  modalFormRef.innerHTML = '';
  renderEmailForm();
}

function renderEmailForm() {
  const markup = `
    <div>
            <p class="form__title">
            Leave Your Email to receive news
            </p>
            <div class="form__container">
                <label class="form__label">
                <span class="form__label-title">E-mail</span>
                <input class="form__input" type='text' name='e-mail' placeholder='Your e-mail'>
                </label> 
            </div>
        <button class="btn btn__light" type='button'>Submit</button>
    </div>
    `;
  return modalFormRef.insertAdjacentHTML('afterbegin', markup);
}

document.removeEventListener('keydown', closeModalEscape);
document.removeEventListener('click', closeModalClikcOutside);
