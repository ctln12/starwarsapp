//= require rails-ujs
//= require_tree .
const results = document.getElementById('results');

// fetchResources();

const buttons = document.querySelectorAll('.btn-dark');

buttons.forEach((button) =>
  button.addEventListener('click', (event) => {
    if (event.target.classList.contains('active')) {
      event.target.classList.remove('active');
    } else {
      document.querySelector('.active').classList.remove('active');
      event.target.classList.add('active');
    }
    // results.innerHTML = '';
    // fetchResource(event.target.innerText);
  })
);

const details = document.getElementById('details');

const resourcesResults = document.querySelectorAll('.result');

resourcesResults.forEach((result) =>
  result.addEventListener('click', (event) => {
    details.innerHTML = '';
    fetchDetails(event.target.dataset.url);
  })
);
