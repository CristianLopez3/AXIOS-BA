
export const apiUrl  = "http://localhost:9999";

// Header
export const commonHeaders = {
  'Content-Type': 'application/json'
  // 'Access-Control-Allow-Origin': "*",
  // 'withCredentials': false
};


// Function to manage errors
export function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }
  return response.json();
}