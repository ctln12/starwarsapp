const resources = document.getElementById('resources');

const insertResources = (data) => {
  const names = Object.keys(data);
  names.forEach((name) => {
    const resource = `<button type="button" class="btn btn-dark mx-2">${name}</button>`;
    resources.insertAdjacentHTML('beforeend', resource);
  });
};

const fetchResources = () => {
  fetch(`https://swapi.co/api/`)
    .then(response => response.json())
    .then(insertResources)
};
