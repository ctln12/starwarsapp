const displayFilters = (data) => {
  filters.insertAdjacentHTML('afterBegin', '<p class="filter active">ALL</p>');
  const filtersArray = Object.keys(data);
  filtersArray.forEach((filter) => {
    const htmlFilter = `<p class="filter" data-url="${data[filter]}">${filter.toUpperCase()}</p>`;
    filters.insertAdjacentHTML('beforeEnd', htmlFilter);
  });
  const filtersList = document.querySelectorAll('.filter');
  addClickEvent(filtersList);
};

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
    itemsRow.insertAdjacentHTML('beforeEnd', htmlItemName);
  });
};

const displayResults = (result) => {
  itemsRow.innerText = '';
  result.forEach((name) => {
    const dataTarget = name.replace(/\W/g,'-');
    const htmlItem = `
      <!-- Button trigger modal -->
      <div class="col-6 col-md-3 col-lg-2 mb-4">
        <p class="name" data-toggle="modal" data-target="#${dataTarget}">${name}</p>
      </div>
    `;
    itemsRow.insertAdjacentHTML('beforeEnd', htmlItem);
  });
};
