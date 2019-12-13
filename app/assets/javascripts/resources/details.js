const insertDetails = (data) => {
  const title = data.name || data.title;
  const beginning = `
    <hr class="my-5">
    <h2 class="text-center mb-5">${title.toUpperCase()}</h2>
  `;
  details.insertAdjacentHTML('afterbegin', beginning)
  for (let key in data) {
    let value = data[key];
    if (key !== 'created' && key !== 'edited' && key !== 'url') {
      // if (typeof value !== 'string' || value.search(/https/) !== -1) {
      //   urlArray = typeof value !== 'string' ? value : value.split(' ');
      //   urlArray.forEach((url) => {
      //     fetch(url)
      //       .then(response => response.json())
      //       .then(data => {
      //         value = data.name || data.title;
      //         const detail = `
      //           <p>${key.replace('_', ' ')}: ${value}</p>
      //         `;
      //         details.insertAdjacentHTML('beforeend', detail);
      //       })
      //     })
        // } else {
        const detail = `
          <p>${key.replace('_', ' ')}: ${value}</p>
        `;
        details.insertAdjacentHTML('beforeend', detail);
      // }
    }
  }
};

const fetchDetails = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(insertDetails)
};