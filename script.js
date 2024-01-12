document.getElementById('recipe-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const recipeName = document.getElementById('recipe-name').value;
    const recipeDescription = document.getElementById('recipe-description').value;

    if (recipeName && recipeDescription) {
        const newRecipe = document.createElement('article');
        newRecipe.innerHTML = `
            <h3>${recipeName}</h3>
            <p>${recipeDescription}</p>
        `;

        document.getElementById('recipe-list').appendChild(newRecipe);

        // Reset form inputs
        document.getElementById('recipe-name').value = '';
        document.getElementById('recipe-description').value = '';
    }
});