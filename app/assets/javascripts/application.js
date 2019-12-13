//= require fuzzy-search
//= require rails-ujs
//= require_tree .

// Resources Section

// Filters
const filters = document.getElementById('filters');

// Div in which to insert items names
const itemsRow = document.getElementById('items-row');

// Div in which to insert items details
const modalsSection = document.getElementById('modals');

// Global variables
const NB_PAGES = { 'people': 10, 'planets': 8, 'films': 2, 'species': 5, 'vehicles': 5, 'starships': 5 };

// Base URL
const base_url = 'https://swapi.co/api/';

// Request to API for filters, all items names and their details
fetchAllDetails(loadSearchData);
fetchAllDetails(loadDetails);
fetchAllDetails(displayAllItemsNames);
callApi(base_url, displayFilters);

// Search Section

// Div in which are stored all the items
const searchData = document.getElementById('search-data');
// Div in which to insert results of search
const searchResults = document.getElementById('search-results');
// Button that lauches the query on click
const searchButton = document.getElementById('search-button');
addSearchEvent();
