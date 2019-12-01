//= require rails-ujs
//= require_tree .

// fetchResources();

const results = document.getElementById('results');

const buttons = document.querySelectorAll('.btn-dark');

buttons.forEach((button) =>
  button.addEventListener('click', (event) => {
    if (event.target.classList.contains('active')) {
      event.target.classList.remove('active');
    } else {
      document.querySelector('.active').classList.remove('active');
      event.target.classList.add('active');
    }
    results.innerHTML = '';
    fetchResource(event.target.innerText);
  })
);
