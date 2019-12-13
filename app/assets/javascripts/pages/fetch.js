const callApi = (url, insertFn) => {
  fetch(url)
    .then(response => response.json())
    .then(insertFn)
};

const fetchResource = (resourceType, nbPages, actionFn) => {
  for (var i = 1; i < nbPages; i++) {
    callApi(`${base_url}${resourceType}/?page=${i}`, actionFn);
  }
};

const fetchAllDetails = (actionFn) => {
  fetchResource('people', 10, actionFn);
  fetchResource('planets', 8, actionFn);
  fetchResource('films', 2, actionFn);
  fetchResource('species', 5, actionFn);
  fetchResource('vehicles', 5, actionFn);
  fetchResource('starships', 5, actionFn);
};
