import View from './View.js';

class addRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)';

  _overlay = document.querySelector('.overlay');
  _window = document.querySelector('.add-recipe-window');
  btnClose = document.querySelector('.btn--close-modal');
  btnOpen = document.querySelector('.nav__btn--add-recipe');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerCloseWindow();
  }

  _toggle() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this.btnOpen.addEventListener('click', this._toggle.bind(this));
  }

  _addHandlerCloseWindow() {
    this.btnClose.addEventListener('click', this._toggle.bind(this));
    this._overlay.addEventListener('click', this._toggle.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const DataArr = [...new FormData(this)];
      const Data = Object.fromEntries(DataArr);
      handler(Data);
    });
  }
}

export default new addRecipeView();
