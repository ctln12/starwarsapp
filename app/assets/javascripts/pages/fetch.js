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

const fetchAllItems = (resourceType, nbPages, displayFn) => {
  for (var i = 1; i < nbPages; i++) {
    callApi(`${base_url}${resourceType}/?page=${i}`, displayFn);
  }
};

const fetchAllItemsNames = (displayFn) => {
  fetchAllItems('people', 10, displayFn);
  fetchAllItems('planets', 8, displayFn);
  fetchAllItems('films', 2, displayFn);
  fetchAllItems('species', 5, displayFn);
  fetchAllItems('vehicles', 5, displayFn);
  fetchAllItems('starships', 5, displayFn);
}

const fetchAllDetails = (loadFn) => {
  fetchAllItems('people', 10, loadFn);
  fetchAllItems('planets', 8, loadFn);
  fetchAllItems('films', 2, loadFn);
  fetchAllItems('species', 5, loadFn);
  fetchAllItems('vehicles', 5, loadFn);
  fetchAllItems('starships', 5, loadFn);
};
