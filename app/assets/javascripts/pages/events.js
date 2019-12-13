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
      }
      const activeFilter = document.querySelector('.filter.active');
      if (activeFilter === null) {
        event.target.classList.add('active');
      } else {
        activeFilter.classList.remove('active');
        event.target.classList.add('active');
      }
    });
  });
};

// Add click event to search button
const addSearchEvent = () => {
  searchButton.addEventListener('click', (event) => {
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
    document.getElementById('search-input').value = "";
    const searcher = new FuzzySearch(allItems);
    const result = searcher.search(searchValue);
    displayResults(result);
    console.log('results', result);
  });
}
