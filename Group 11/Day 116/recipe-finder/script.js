import { fetchRecipes } from './recipeFetcher.js';

const searchButton = document.getElementById('searchButton');
const ingredientInput = document.getElementById('ingredient');
const recipesContainer = document.getElementById('recipes');
const errorMessage = document.getElementById('errorMessage');

const displayRecipes = (recipes) => {
    recipesContainer.innerHTML = '';
    recipes.forEach((recipe) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        
        const img = document.createElement('img');
        img.src = recipe.image;
        img.alt = recipe.title;
        
        const title = document.createElement('h3');
        title.textContent = recipe.title;

        const instructions = document.createElement('a');
        instructions.href = `https://spoonacular.com/recipes/${recipe.title}-${recipe.id}`;
        instructions.textContent = 'View Recipe Instructions';
        instructions.target = "_blank";

        recipeDiv.appendChild(img);
        recipeDiv.appendChild(title);
        recipeDiv.appendChild(instructions);
        
        recipesContainer.appendChild(recipeDiv);
    });
};

const showError = (message) => {
    errorMessage.textContent = message;
};

const handleSearch = async () => {
    const ingredient = ingredientInput.value.trim();
    if (!ingredient) {
        showError('Please enter an ingredient');
        return;
    }
    showError('');
    recipesContainer.innerHTML = 'Loading...';

    try {
        const recipes = await fetchRecipes(ingredient);
        if (recipes.length === 0) {
            showError('No recipes found for this ingredient.');
            recipesContainer.innerHTML = '';
        } else {
            displayRecipes(recipes);
        }
    } catch (error) {
        showError(error.message);
    }
};

searchButton.addEventListener('click', handleSearch);

ingredientInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});
