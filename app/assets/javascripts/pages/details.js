const modalsSection = document.getElementById('modals');

const createHtmlModal = (dataId, title, content) => {
  const htmlModal = `
    <div class="modal fade" id="${dataId}" tabindex="-1" role="dialog" aria-labelledby="modalScrollableTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content bg-dark">
          <div class="modal-header">
            <h5 class="modal-title" id="modalScrollableTitle">${title.toUpperCase()}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ${content}
          </div>
        </div>
      </div>
    </div>`;
  return htmlModal;
};

const loadDetails = (data) => {
  const detailsArray = [];
  data.results.forEach((result) => {
    const resultKeys = Object.keys(result);
    const name = result['name'] || result['title'];
    const dataId = name.replace(/\W/g,'-');
    let htmlModal = '';
    let title = '';
    let htmlContent = '';

    resultKeys.forEach((resultKey) => {
      if (resultKey === 'name' || resultKey === 'title') {
        title = result[resultKey];
      } else if (resultKey !== 'created' && resultKey !== 'edited' && resultKey !== 'url') {
        htmlContent += `<p>${resultKey.replace('_', ' ').replace(/^\w/, c => c.toUpperCase())}: ${result[resultKey]}</p>`;
      }
    });
    htmlModal = createHtmlModal(dataId, title, htmlContent);
    modalsSection.insertAdjacentHTML('beforeEnd', htmlModal);
    console.log('added modal');
  });
};

const loadSearchData = (data) => {
  data.results.forEach((result) => {
    const name = Object.keys(result).includes('name') ? result['name'] : result['title'];
    const htmlItemName = `
        <p id="result-item">${name}</p>
    `;
    searchData.insertAdjacentHTML('beforeEnd', htmlItemName);
  });
  console.log('search data added')
};
