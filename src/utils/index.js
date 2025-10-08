export async function fetchRecipes({ query, limit }) {
  let url = "https://dummyjson.com/recipes";
  console.log(query, "query");
  try {
    if (query) {
      const response = await fetch(`${url}/search?q=${query}`);
      if (!response?.ok) {
        return new Error("Recipes Failed to load");
      }
      const data = await response.json();
      return data.recipes || [];
    }

    const response = await fetch(`${url}?limit=${limit}`);

    if (!response?.ok) {
      return new Error("Recipes Failed to load");
    }
    const data = await response.json();

    return data.recipes || [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}
