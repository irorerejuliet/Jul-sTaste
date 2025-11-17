export async function fetchRecipes({ query, limit }) {
  const url = "https://dummyjson.com/recipes";
  console.log(query, "query");

  try {
    let response;
    if (query) {
      response = await fetch(`${url}/search?q=${query}`);
    } else {
      response = await fetch(`${url}?limit=${limit}`);
    }

    if (!response.ok) {
      throw new Error("Recipes failed to load");
    }

    const data = await response.json();
    return data.recipes || [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}
// export async function fetchRecipes(){
//   const url = `https://dummyjson.com/recipes`;

//   const response = await fetch(url)

//   const data = await response.json();

//   return data[0];
// }
