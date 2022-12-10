import {
  backdropRef,
  onCloseBtnClick,
  closeModalEscape,
  closeModalClikcOutside,
  modalRef,
} from './modal-open';

const emailInputBtnHeaderRef = document.getElementById('#email-modal-header');
const emailInputBtnFooterRef = document.getElementById('#email-modal-footer');
const modalFormRef = document.querySelector('.form');

emailInputBtnHeaderRef.addEventListener('click', onEmailFormClickHandler);
emailInputBtnFooterRef.addEventListener('click', onEmailFormClickHandler);

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

  modalRef.addEventListener('click', event => {
    if (!event.target.classList.contains('btn__modal-close')) {
      return;
    }
    onCloseBtnClick();
  });
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
                <input class="field form__input" type='text' name='e-mail' placeholder='Your e-mail' required>
                </label> 
            </div>
    </div>
    `;
  return modalFormRef.insertAdjacentHTML('afterbegin', markup);
}
