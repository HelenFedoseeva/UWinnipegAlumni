const btnRef = document.getElementById('#modal');
const backdropRef = document.querySelector('.backdrop');

btnRef.addEventListener('click', onClickHadler);
// Close modal to Escape
document.addEventListener('keydown', closeModalEscape);
//Сlose modal on click outside
document.addEventListener('click', closeModalClikcOutside);

function onClickHadler(e) {
  e.preventDefault();

  backdropRef.classList.remove('is-hidden');

  const closeIconRef = document.getElementById('#modal-close');
  const modalFormRef = document.querySelector('.modal__form');

  closeIconRef.addEventListener('click', onCloseBtnClick);

  modalFormRef.addEventListener('click', event => {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }
    onCloseBtnClick();
  });
}

function onCloseBtnClick(e) {
  backdropRef.classList.add('is-hidden');
}

function closeModalEscape(e) {
  if (e.key === 'Escape') {
    onCloseBtnClick();
  }
}

function closeModalClikcOutside(e) {
  console.log(e.target.classList.value);
  if (e.target.classList.value !== 'backdrop') {
    return;
  }
  onCloseBtnClick();
}
