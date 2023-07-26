export async function fetchRecipes(filter: any) {
  const { query, limit } = filter;

  const url = `https://api.edamam.com/search?q=${query}&app_id=ea67a7ef&app_key=fb859151d065a054ffc42618770cc9db&from=0&to=${limit}&`;

  const response = await fetch(url);

  const data = await response.json();

  return data?.hits;
}

export async function fetchRecipe(id: any) {
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=ea67a7ef&app_key=fb859151d065a054ffc42618770cc9db`;

  const response = await fetch(url);

  const data = await response.json();

  return data[0];
}
