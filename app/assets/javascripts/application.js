//= require fuzzy-search
//= require rails-ujs
//= require_tree .

// ROOT PATH

// Search Section

// Div in which are stored all the items
const searchData = document.getElementById('search-data');
// Div in which to insert results of search
const searchResults = document.getElementById('search-results');
// Button that lauches the query on click
const searchButton = document.getElementById('search-button');
// Add click event to search button
searchButton.addEventListener('click', (event) => {
  event.preventDefault();
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
});

// Resources Section
const NB_PAGES = { 'people': 10, 'planets': 8, 'films': 2, 'species': 5, 'vehicles': 5, 'starships': 5 };

// Base URL
const base_url = 'https://swapi.co/api/';

// Filters
const filters = document.getElementById('filters');

// Request to API for filters, all items names and their details
callApi(base_url, insertFilters);
fetchAllItemsNames(displayAllItemsNames);
fetchAllDetails(loadDetails);

// Div in which to insert items' names
const itemsRow = document.getElementById('items-row');

// Div in which to insert more button
const moreCol = document.getElementById('more-col');

// More button that display more resources
const moreButton = document.querySelector('#more-button');

// Add click event to more button
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
