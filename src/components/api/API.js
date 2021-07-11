import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_FITNESS_TRACKR_API_URL}`;

export async function getRoutines() {
  try {
    const { data } = await axios.get(`${BASE_URL}/routines`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateActivity(id) {
  try {
    const { data } = await axios.patch(`${BASE_URL}activities/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}
