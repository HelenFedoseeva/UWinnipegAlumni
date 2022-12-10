export const btnRef = document.getElementById('#modal');
export const backdropRef = document.querySelector('.backdrop');
export const modalFormRef = document.querySelector('.modal__form');
const modalIconCloseRef = document.getElementById('#modal-close');
export const modalRef = document.querySelector('.modal');

btnRef.addEventListener('click', onClickHadler);
modalIconCloseRef.addEventListener('click', onCloseBtnClick);

export function onClickHadler(e) {
  backdropRef.classList.remove('is-hidden');

  modalFormRef.innerHTML = '';
  formInputRender();

  // closeIconRef.addEventListener('click', onCloseBtnClick);
  document.addEventListener('keydown', closeModalEscape);
  document.addEventListener('click', closeModalClikcOutside);

  modalRef.addEventListener('click', event => {
    if (!event.target.classList.contains('btn__modal-close')) {
      return;
    }
    onCloseBtnClick();
  });
}

function formInputRender() {
  const markup = `
    <p class="form__title">Leave Your data for more details</p>
            <div class="form__container">
                <label class="form__label">
                    <span class="form__label-title">First Name</span>
                    <input id="name-input" class="field form__input" type="text" name="first-name" placeholder="Alex" required="required" >
                </label>
                <label class="form__label">
                    <span class="form__label-title">Last Name</span>
                    <input id="last-name-input" class="field form__input" type="text" name="last-name" placeholder="Smith">
                </label>
                <label class="form__label">
                    <span class="form__label-title">E-mail</span>
                    <input id="email-input" class="field form__input" type="email" name="email" placeholder="alex@gmail.com">
                </label>
                <label class="form__label">
                    <span class="form__label-title">Occupation</span>
                    <input id="occupation-input" class="field form__input" type="text" name="occupation" placeholder="Student">
                </label>
                <label class="form__label">
                    <span class="form__label-title">Year of graduation</span>
                    <input id="graduation-input" class="field form__input" type="number" name="Year-of-graduation" placeholder="2001">
                </label>
                <label class="form__label">
                    <span class="form__label-title">Major</span>
                    <input id="major-input" class="field form__input" type="text" name="major" placeholder="major">
                </label>
            </div>
  `;

  modalFormRef.insertAdjacentHTML('afterbegin', markup);
}

export function onCloseBtnClick(e) {
  backdropRef.classList.add('is-hidden');
  document.removeEventListener('keydown', closeModalEscape);
  document.removeEventListener('click', closeModalClikcOutside);
}

export function closeModalEscape(e) {
  if (e.key === 'Escape') {
    onCloseBtnClick();
    document.removeEventListener('keydown', closeModalEscape);
    document.removeEventListener('click', closeModalClikcOutside);
  }
}

export function closeModalClikcOutside(e) {
  if (e.target.classList.value !== 'backdrop') {
    return;
  }
  onCloseBtnClick();
}
