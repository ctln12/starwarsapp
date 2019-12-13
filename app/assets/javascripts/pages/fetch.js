const displayAllItemsNames = (data) => {
  data.results.forEach((result) => {
    const name = Object.keys(result).includes('name') ? result['name'] : result['title'];
    const dataTarget = name.replace(/\W/g,'-');
    const htmlItemName = `
      <!-- Button trigger modal -->
      <div class="col-6 col-md-4 col-lg-3 mb-4">
        <p class="name" data-toggle="modal" data-target="#${dataTarget}">${name}</p>
      </div>
    `;
    searchData.insertAdjacentHTML('beforeEnd', htmlItemName);
    itemsRow.insertAdjacentHTML('beforeEnd', htmlItemName);
  });
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
