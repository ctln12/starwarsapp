const displayAllItemsNames = (data) => {
  data.results.forEach((result) => {
    const name = Object.keys(result).includes('name') ? result['name'] : result['title'];
    const dataTarget = name.replace(/\W/g,'-');
    // const htmlItemData = `
    //   <!-- Button trigger modal -->
    //   <div class="col-6 col-md-4 col-lg-3 mb-4">
    //     <p id="result-item" class="name" data-toggle="modal" data-target="#${dataTarget}">${name}</p>
    //   </div>
    // `;
    // searchData.insertAdjacentHTML('beforeEnd', htmlItemData);
    const htmlItemName = `
      <!-- Button trigger modal -->
      <div class="col-6 col-md-4 col-lg-3 mb-4">
        <p class="name" data-toggle="modal" data-target="#${dataTarget}">${name}</p>
      </div>
    `;
    itemsRow.insertAdjacentHTML('beforeEnd', htmlItemName);
  });
};

const fetchAllItemsNames = () => {
  for (var i = 1; i < 10; i++) {
    if (i < 2) {
      callApi(`${base_url}people/?page=${i}`, displayAllItemsNames);
      callApi(`${base_url}films/?page=${i}`, displayAllItemsNames);
      callApi(`${base_url}planets/?page=${i}`, displayAllItemsNames);
      callApi(`${base_url}species/?page=${i}`, displayAllItemsNames);
      callApi(`${base_url}vehicles/?page=${i}`, displayAllItemsNames);
      callApi(`${base_url}starships/?page=${i}`, displayAllItemsNames);
    } else if (i >=2 && i < 5) {
      callApi(`${base_url}people/?page=${i}`, displayAllItemsNames);
      callApi(`${base_url}planets/?page=${i}`, displayAllItemsNames);
      callApi(`${base_url}species/?page=${i}`, displayAllItemsNames);
      callApi(`${base_url}vehicles/?page=${i}`, displayAllItemsNames);
      callApi(`${base_url}starships/?page=${i}`, displayAllItemsNames);
    } else if (i >=5 && i < 8) {
      callApi(`${base_url}people/?page=${i}`, displayAllItemsNames);
      callApi(`${base_url}planets/?page=${i}`, displayAllItemsNames);
    } else if (i >= 8) {
      callApi(`${base_url}people/?page=${i}`, displayAllItemsNames);
    }
  }
}

