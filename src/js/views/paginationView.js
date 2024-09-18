import icons from 'url:../../img/icons.svg';
import View from './View.js';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const currPage = this._data.page;
    console.log(this._data);
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultsPerPage
    );
    console.log(numPages);

    // 1 : We are at 1st page and there are other pages also exist
    if (currPage === 1 && numPages > 1)
      return this._generateMarkupNext(currPage);
    // 2 : We are at 1st page and there is no other page exist .
    if (currPage === 1 && numPages === 1) return ''; // grapes !
    // 3 : We are at last page
    if (currPage === numPages && numPages > 1)
      return this._generateMarkupPrev(currPage);
    // 4 : Other Pages
    if (currPage < numPages)
      return `${this._generateMarkupPrev(currPage)} ${this._generateMarkupNext(
        currPage
      )}`;
  }

  _generateMarkupPrev(currPage) {
    return `
        <button data-goto="${
          currPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
        </button>`;
  }

  _generateMarkupNext(currPage) {
    return `
        <button data-goto="${
          currPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
  }

  addHandlerPagination(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
}

export default new paginationView();
