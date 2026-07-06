const BASE_URL = "https://demohotelsapi.pythonanywhere.com/hotels/";

export async function getHotels() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch hotels");
  }

  const result = await response.json();

  // The hotels are inside result.data
  return result.data;
}