import axios from 'axios';

const BASE_URL = 'http://localhost:3000/persons';

const getAll = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw error; 
  }
};

const create = async (newPerson) => {
  try {
    const response = await axios.post(BASE_URL, newPerson);
    return response.data;
  } catch (error) {
    throw error; 
  }
};

const update = (id, newObject) => {
  return axios.put(`${BASE_URL}/${id}`, newObject)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error updating person:", error);
      throw error; 
    });
};

const deleteData = (id) => {
  return axios.delete(`${BASE_URL}/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error deleting person:", error);
      throw error; 
    });
};

export default { getAll, create, update, deleteData };
