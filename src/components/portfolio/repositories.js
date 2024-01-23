import axios from "axios";

export const getRepositories = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    const repositories = response.data;
    console.log(repositories)
    return repositories;
  } catch (error) {
    console.error("Błąd podczas pobierania repozytoriów", error.message);
    throw error; 
  }
};
