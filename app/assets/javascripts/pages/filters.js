const insertFilters = (data) => {
  filters.insertAdjacentHTML('afterBegin', '<p class="filter active">ALL</p>');
  const filtersArray = Object.keys(data);
  filtersArray.forEach((filter) => {
    const htmlFilter = `<p class="filter" data-url="${data[filter]}">${filter.toUpperCase()}</p>`;
    filters.insertAdjacentHTML('beforeEnd', htmlFilter);
  });
  const filtersList = document.querySelectorAll('.filter');
  addClickEvent(filtersList);
};
