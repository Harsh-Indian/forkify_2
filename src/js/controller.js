import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // Render Spinner :
    recipeView.renderSpinner();

    // 0) Mark Selected search result :
    resultsView.update(model.loadSearchResultsPerPage());

    // 0.5) Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // 1. Loading Recipe :
    await model.loadRecipe(id);

    // 2. Rendering Recipe :
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // 0) Render Spinner
    resultsView.renderSpinner();

    // 1) Get Search Query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load Search Results :
    await model.loadSearchResults(query);

    // 3) Render Results :
    resultsView.render(model.loadSearchResultsPerPage());

    // 4) Render intial paginationView Page :
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPages = function (goToPage) {
  // a) Render New Results :
  resultsView.render(model.loadSearchResultsPerPage(goToPage));

  // b) Render New paginationView Page :
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // a) Update New Servings :
  model.updateServings(newServings);

  // b)Render Updated Recipe :
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // Add/Remove Bookmarks :
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // Update Recipe View :
  recipeView.update(model.state.recipe);

  // render the bookmarks :
  bookmarksView.render(model.state.bookmarks);
};

const controlLoading = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // show loading spinner :
    addRecipeView.renderSpinner();

    // Upload New Recipe to API :
    await model.uploadRecipe(newRecipe);

    console.log(model.state.recipe);

    // Render recipe :
    recipeView.render(model.state.recipe);

    // Success Message :
    addRecipeView.renderMessage();

    // Show new recipe in bookmarks :
    bookmarksView.render(model.state.bookmarks);

    // Change the hash id instantly :
    window.history.pushState(null, '', `${model.state.recipe.id}`);

    // Close form Window :
    setTimeout(function () {
      if (!addRecipeView._overlay.classList.contains('hidden'))
        addRecipeView._toggle();
    }, 2500);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};

const newFeatures = function () {
  console.log('Welcome to the application !');
};

// Subscriber :
const init = function () {
  bookmarksView.addHandlerLoad(controlLoading);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerServing(controlServings);
  recipeView.addHandlerBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerPagination(controlPages);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  newFeatures();
};
init();
