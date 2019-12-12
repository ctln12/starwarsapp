const callApi = (url, insertFn) => {
  fetch(url)
    .then(response => response.json())
    .then(insertFn)
};
