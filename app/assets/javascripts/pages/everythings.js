const storeItemsDetails = (data) => {
  data.results.forEach((result) => {
    const itemsKeys = Object.keys(result);
    itemsKeys.forEach((key) => {
      result[key]
    });
  });
};

const storeItems = (data) => {
  data.results.forEach((result) => {
    const name = Object.keys(result).includes('name') ? result['name'] : result['title'];
    // itemsArray.push(name);
    const htmlItemName = `
        <p id="result-item">${name}</p>
    `;
    searchResults.insertAdjacentHTML('beforeEnd', htmlItemName);
  });
  // console.log(itemsArray);
};

const fetchAllItemsNames = () => {
  for (var i = 1; i < 10; i++) {
    if (i < 2) {
      callApi(`${base_url}people/?page=${i}`, storeItems);
      callApi(`${base_url}films/?page=${i}`, storeItems);
      callApi(`${base_url}planets/?page=${i}`, storeItems);
      callApi(`${base_url}species/?page=${i}`, storeItems);
      callApi(`${base_url}vehicles/?page=${i}`, storeItems);
      callApi(`${base_url}starships/?page=${i}`, storeItems);
    } else if (i < 5) {
      callApi(`${base_url}species/?page=${i}`, storeItems);
      callApi(`${base_url}vehicles/?page=${i}`, storeItems);
      callApi(`${base_url}starships/?page=${i}`, storeItems);
    } else if (i < 8) {
      callApi(`${base_url}people/?page=${i}`, storeItems);
      callApi(`${base_url}planets/?page=${i}`, storeItems);
    } else {
      callApi(`${base_url}people/?page=${i}`, storeItems);
    }
  }
}

