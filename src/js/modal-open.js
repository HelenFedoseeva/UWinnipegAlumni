const btnRef = document.getElementById('#modal');
const backdropRef = document.querySelector('.backdrop');

btnRef.addEventListener('click', onClickHadler);

function onClickHadler(e) {
  e.preventDefault();

  backdropRef.classList.remove('is-hidden');

  const closeIconRef = document.getElementById('#modal-close');
  closeIconRef.addEventListener('click', onCloseBtnClick);
}

function onCloseBtnClick(e) {
  backdropRef.classList.add('is-hidden');
}
