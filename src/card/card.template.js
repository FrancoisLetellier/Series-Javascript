export default data => `
  <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img class="card-img-top" src="${data.image.medium}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${data.summary}</p>
          <div class="d-flex justify-content-between align-items-center">
            <small class="text-muted">Metadata</small>
          </div>
        </div>
      </div>
    </div>
`;
