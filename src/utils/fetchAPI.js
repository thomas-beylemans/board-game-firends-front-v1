import axios from "axios";

export const fetchAPI = async (route) => {
  const token = JSON.parse(localStorage.getItem('user'));
  const result = await axios.get(`https://boardgamefriends.herokuapp.com/api/v1/${route}`, {
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    }
  });
  return result.data;
}

