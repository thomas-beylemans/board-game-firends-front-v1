import axios from "axios";

export const gitAPI = async (user) => {
  const result = await axios.get(`https://api.github.com/users/${user}`);
  return result.data;
}

