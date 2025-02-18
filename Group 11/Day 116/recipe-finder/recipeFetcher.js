const apiKey = '58ccfb3ef93f4f4297bf46a7d218e04c';

export const fetchRecipes = async (ingredient) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${ingredient}&apiKey=${apiKey}&number=5`;

    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        throw new Error('Error fetching data from Spoonacular API');
    }
};
