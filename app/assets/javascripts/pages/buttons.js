const buttons = document.querySelectorAll('.btn-dark');

buttons.forEach((button) =>
  button.addEventListener('click', (event) => {
    if (!event.target.classList.contains('active')) {
      const activeButton = document.querySelector('.btn.btn-dark.active');
      activeButton.classList.remove('active');
      event.target.classList.add('active');

      const selectedResource = event.target.innerText;
      document.getElementById(`${selectedResource}`).classList.remove('no-display');

      const activeResource = activeButton.innerText;
      document.getElementById(`${activeResource}`).classList.add('no-display');
    }
  })
);
