import axios from "axios";

export const fetchEvents = async (route) => {
  const token = JSON.parse(localStorage.getItem('user'));

  try {
    const result = await axios.get(`https://boardgamefriends.herokuapp.com/api/v1/${route}`, {
      // const result = await axios.get(`http://localhost:46655/api/v1/${route}?zoomFactor=10`, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      }
    });
    return result.data;
  }
  catch (err) {
    return err.response.data.errorMessage;
  }
};


