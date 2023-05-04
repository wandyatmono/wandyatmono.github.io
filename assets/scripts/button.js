window.onload = function() {

const buttons = document.querySelectorAll('button:not(button.fab)');
buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault;
    button.style.overflow = 'hidden';
    let x = event.clientX - button.offsetLeft;
    let y = event.clientY - button.offsetTop;
    let ripple = document.createElement('span');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    this.appendChild(ripple);
    setTimeout(function () {
      ripple.remove();
      button.style.overflow = 'visible';
    }, 700);
  });
});
const fabs = document.querySelectorAll('button.fab');
fabs.forEach(function (fab) {
  fab.addEventListener('click', function (event) {
    event.preventDefault;
    fab.classList.remove("pulse");
    void fab.offsetWidth;
    fab.classList.add("pulse");
  }, false);
});

};