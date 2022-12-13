const bodyRef = document.getElementById('body');
const switchModeBtnRef = document.querySelector('.header__nav-item-btn');

switchModeBtnRef.addEventListener('click', onSwitchThemeClickHandler);

if (!localStorage.getItem('dark-mode')) {
  localStorage.setItem('dark-mode', 'false');
} else if (localStorage.getItem('dark-mode') === 'true') {
  bodyRef.classList.add('dark-theme');
  return;
}

console.log(localStorage.getItem('dark-mode'));

function onSwitchThemeClickHandler(e) {
  if (localStorage.getItem('dark-mode') === 'true') {
    bodyRef.classList.remove('dark-theme');
    localStorage.setItem('dark-mode', 'false');
    return;
  }
  bodyRef.classList.add('dark-theme');
  localStorage.setItem('dark-mode', 'true');
}
