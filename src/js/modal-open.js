export const btnRef = document.getElementById('#modal');
export const backdropRef = document.querySelector('.backdrop');
export const modalFormRef = document.querySelector('.modal__form');
const modalIconCloseRef = document.getElementById('#modal-close');

btnRef.addEventListener('click', onClickHadler);
modalIconCloseRef.addEventListener('click', onCloseBtnClick);

export function onClickHadler(e) {
  backdropRef.classList.remove('is-hidden');

  modalFormRef.innerHTML = '';
  formInputRender();

  // closeIconRef.addEventListener('click', onCloseBtnClick);
  document.addEventListener('keydown', closeModalEscape);
  document.addEventListener('click', closeModalClikcOutside);

  modalFormRef.addEventListener('click', event => {
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
                    <input class="form__input" type="text" name="first-name" placeholder="Alex" required="required" >
                </label>
                <label class="form__label">
                    <span class="form__label-title">Last Name</span>
                    <input class="form__input" type="text" name="last-name" placeholder="Smith">
                </label>
                <label class="form__label">
                    <span class="form__label-title">E-mail</span>
                    <input class="form__input" type="email" name="email" placeholder="alex@gmail.com">
                </label>
                <label class="form__label">
                    <span class="form__label-title">Occupation</span>
                    <input class="form__input" type="text" name="occupation" placeholder="Student">
                </label>
                <label class="form__label">
                    <span class="form__label-title">Year of graduation</span>
                    <input class="form__input" type="number" name="Year-of-graduation" placeholder="2001">
                </label>
                <label class="form__label">
                    <span class="form__label-title">Major</span>
                    <input class="form__input" type="text" name="major" placeholder="major">
                </label>
            </div>
            <div class="modal__btn-wrapper">
                <button class="btn btn__light btn__modal-close" type="button">Close</button>
                <button class="btn btn__light" type="submit">Submit</button>
                
            </div>
  `;

  modalFormRef.insertAdjacentHTML('afterbegin', markup);
}

export function onCloseBtnClick(e) {
  backdropRef.classList.add('is-hidden');
}

export function closeModalEscape(e) {
  if (e.key === 'Escape') {
    onCloseBtnClick();
  }
}

export function closeModalClikcOutside(e) {
  if (e.target.classList.value !== 'backdrop') {
    return;
  }
  onCloseBtnClick();
}

document.removeEventListener('keydown', closeModalEscape);
document.removeEventListener('click', closeModalClikcOutside);
