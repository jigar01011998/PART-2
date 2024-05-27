import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

const getAllCountries = () => {
  return axios.get(`${baseUrl}/all`)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error fetching all countries:", error);
      throw error; 
    });
};

const getCountries = (query) => {
  return axios.get(`${baseUrl}/name/${query}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error fetching countries by query:", error);
      throw error; 
    });
};

export default { getAllCountries, getCountries };
