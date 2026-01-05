const buttons = document.querySelectorAll('.btn-dialog');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    
    button.classList.add('active');
  });
});
