const modalsSection = document.getElementById('modals');

const htmlModal = `
  <div class="modal fade" id="Luke-Skywalker" tabindex="-1" role="dialog" aria-labelledby="modalScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <h5 class="modal-title" id="modalScrollableTitle">Luke Skywalker</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Content</p>
        </div>
      </div>
    </div>
  </div>
`;

const loadDetails = (data) => {
  console.log('loading modals...')
  // data.results.forEach((result) => {
    // const name = Object.keys(result).includes('name') ? result['name'] : result['title'];
    // const dataTarget = name.replace(/\W/g,'-');
    // modalsSection.insertAdjacentHTML('beforeEnd', htmlModal);
  // });
};
