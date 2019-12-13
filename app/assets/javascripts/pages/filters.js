const addClickEvent = (filters) => {
  filters.forEach((filter) => {
    filter.addEventListener('click', (event) => {
      itemsRow.innerText = '';
      const type = event.target.innerText.toLowerCase();
      if (type !== 'all') {
        callApi(`${base_url}${type}/`, insertItemsNames);
        console.log('clicked ', type.toUpperCase());
      } else {
        fetchAllItemsNames(displayAllItemsNames);
        console.log('clicked ALL');
        moreButton.setAttribute('hidden', '');
      }
      const activeFilter = document.querySelector('.filter.active');
      if (activeFilter === null) {
        event.target.classList.add('active');
        moreButton.setAttribute('hidden', '');
      } else {
        activeFilter.classList.remove('active');
        event.target.classList.add('active');
      }
      moreButton.setAttribute('data-page', '1');
    });
  });
};

const insertFilters = (data) => {
  filters.insertAdjacentHTML('afterBegin', '<p class="filter active">ALL</p>');
  const filtersArray = Object.keys(data);
  filtersArray.forEach((filter) => {
    const htmlFilter = `<p class="filter" data-url="${data[filter]}">${filter.toUpperCase()}</p>`;
    filters.insertAdjacentHTML('beforeEnd', htmlFilter);
  });
  fetchAllItemsNames(displayAllItemsNames);
  fetchAllItemsNames(loadDetails);
  const filtersList = document.querySelectorAll('.filter');
  addClickEvent(filtersList);
};
