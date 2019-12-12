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
  console.log(result);
};
