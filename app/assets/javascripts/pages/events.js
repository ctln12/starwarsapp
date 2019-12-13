// Add click event to filter buttons
const addClickEvent = (filters) => {
  filters.forEach((filter) => {
    filter.addEventListener('click', (event) => {
      itemsRow.innerText = '';
      const type = event.target.innerText.toLowerCase();
      if (type !== 'all') {
        fetchResource(type, NB_PAGES[type], displayAllItemsNames);
        console.log('clicked ', type.toUpperCase());
      } else {
        fetchAllDetails(displayAllItemsNames);
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

// Add click event to search button
const addSearchEvent = () => {
  searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    moreButton.innerText = '';
    const activeFilter = document.querySelector('.filter.active');
    if (activeFilter !== null) {
      activeFilter.classList.remove('active');
    }
    const allItems = [];
    const searchItems = document.querySelectorAll('#result-item');
    searchItems.forEach((item) => {
      allItems.push(item.innerText);
    });
    const searchValue = document.getElementById('search-input').value;
    const searcher = new FuzzySearch(allItems);
    const result = searcher.search(searchValue);
    displayResults(result);
    console.log('results', result);
  });
}
// Add click event to more button
const addMoreEvent = () => {
  moreButton.addEventListener('click', (event) => {
  const activeFilter = document.querySelector('.filter.active');
  const type = document.querySelector('.filter.active').innerText.toLowerCase();
  const nb = parseInt(moreButton.getAttribute('data-page'), 10);
  if (activeFilter.innerText === 'ALL') {
    callApi(base_url, insertMoreItemsNames);
    console.log('clicked more ALL');
  } else if (activeFilter.innerText !== 'FILMS') {
    callApi(`${base_url}${type}/?page=${nb+1}`,insertItemsNames);
    moreButton.setAttribute('data-page', nb+1);
    console.log('clicked more ', type);
  }
  });
}
