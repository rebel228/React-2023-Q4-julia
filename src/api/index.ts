export async function getProducts(
  numbersPerPage: number,
  word: string,
  page: number
) {
  const response = await fetch(
    `https://dummyjson.com/products${
      word ? `/search?q=${word}&` : '?'
    }limit=${numbersPerPage}&skip=${(page - 1) * 10}`
  );
  const data = await response.json();
  return data;
}

export async function getDetailedProduct(id: string | null) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
}
