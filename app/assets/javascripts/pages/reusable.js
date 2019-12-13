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
