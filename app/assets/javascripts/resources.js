const addClickEvent = (buttons) => {
  buttons.forEach((button) =>
    button.addEventListener('click', (event) => {
      if (event.target.classList.contains('active')) {
        event.target.classList.remove('active');
      } else {
        document.querySelector('.active').classList.remove('active');
        event.target.classList.add('active');
      }
      results.innerHTML = '';
      details.innerHTML = '';
      fetchResource(event.target.innerText);
    })
  );
}

const insertResources = (data) => {
  const names = Object.keys(data);
  names.forEach((name) => {
    const resource = `<button type="button" class="btn btn-dark mx-2">${name}</button>`;
    resources.insertAdjacentHTML('beforeend', resource);
  });
  const buttons = document.querySelectorAll('.btn-dark');
  addClickEvent(buttons);
};

const fetchResources = () => {
  fetch(`https://swapi.co/api/`)
    .then(response => response.json())
    .then(insertResources)
};
