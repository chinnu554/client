import API_URL from "../src/api/auth.api.js";

const handleResponse = async (response) => {
  if (response.status === 204) return null;
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "Server error occured");
  }
  return result;
};
const apiRequest = {
  get: async (path, options = {}) => {
    const response = await fetch(`${API_URL}${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...options,
      },
    });
    return await handleResponse(response);
  },
  post: async (path, body, options = {}) => {
    console.log(API_URL)
    const response = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options,
      },
      body: JSON.stringify(body),
    });
    return await handleResponse(response);
  },
  patch: async (path, body, options = {}) => {
    const response = await fetch(`${API_URL}${path}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...options,
      },
      body: JSON.stringify(body),
    });
    return await handleResponse(response);
  },
  delete: async (path, options = {}) => {
    const response = await fetch(`${API_URL}${path}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...options,
      },
    });
    return await handleResponse(response);
  },
};

export default apiRequest;
