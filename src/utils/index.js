// export async function fetchRecipes (filter) {
//     const {query, limit} = filter;

//     const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${
//       import.meta.env.VITE_EDAMAM_API_ID
//     }&app_key=${import.meta.env.VITE_EDAMAM_API_KEY}&from=0&to=${limit}`;


    

// const response = await fetch(url)

// const data = await response.json();
// console.log(data);
// return data?.hints;
// }
export async function fetchRecipes({ query, limit }) {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${
    import.meta.env.VITE_EDAMAM_API_ID
  }&app_key=${import.meta.env.VITE_EDAMAM_API_KEY}&from=0&to=${limit}`;
console.log(import.meta.env.VITE_EDAMAM_USER_ID);
  const response = await fetch(url, {
    headers: {
      "Edamam-Account-User": import.meta.env.VITE_EDAMAM_USER_ID,
    },
  });

  const data = await response.json();
  console.log(data);
  return data?.hints; // adjust based on what Edamam returns
}
