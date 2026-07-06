const BASE_URL = "https://demohotelsapi.pythonanywhere.com/hotels/";

export async function getHotels() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch hotels");
  }

  const result = await response.json();
  return result.data;
}

export async function getHotelById(id) {
  const response = await fetch(`${BASE_URL}${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch hotel");
  }

  const result = await response.json();

  return result.data;
}