const insertItemsNames = (data) => {
  data.results.forEach((result) => {
    const name = Object.keys(result).includes('name') ? result['name'] : result['title'];
    const dataTarget = name.replace(/\W/g,'-');
    const htmlItem = `
      <!-- Button trigger modal -->
      <div class="col-6 col-md-4 col-lg-3 mb-4">
        <p class="name" data-toggle="modal" data-target="#${dataTarget}">${name}</p>
      </div>
    `;
    itemsRow.insertAdjacentHTML('beforeEnd', htmlItem);
  });
  const more = data.next;
  const currentActiveFilter = document.querySelector('.filter.active').innerText;
  if (more !== null || currentActiveFilter === 'ALL') {
    moreButton.removeAttribute('hidden');
  } else {
    moreButton.setAttribute('hidden', '');
  }
};

const insertMoreItemsNames = (data) => {
  const typesNames = Object.keys(data);
  const nb = parseInt(moreButton.getAttribute('data-page'), 10) + 1;
  typesNames.forEach((name) => {
    if ((name === 'films' && nb < 2) || (name === 'people' && nb < 10) || (name === 'planets' && nb < 8) || (name === 'species' && nb < 5) || (name === 'vehicles' && nb < 5) || (name === 'starships' && nb < 5)) {
      callApi(`${base_url}${name}/?page=${nb}`, insertItemsNames);
      console.log('add more resources', nb);
    } else {
      moreButton.setAttribute('hidden', '');
      console.log('stop');
    }
  });
  moreButton.setAttribute('data-page', nb);
};
