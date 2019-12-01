const insertResource = (data) => {
  const resourcesResults = data.results;
  resourcesResults.forEach((result) => {
    const name = `<p class="result" data-url="${result.url}">${result.name || result.title}</p>`;
    results.insertAdjacentHTML('beforeend', name);
  });
  const more = data.next;
  if (more != null) {
    results.insertAdjacentHTML('beforeend', '<p id="more" class="btn btn-outline-primary">more...</p>');
  }
};

const fetchResource = (resource) => {
  fetch(`https://swapi.co/api/${resource}/`)
    .then(response => response.json())
    .then(insertResource)
};
