import axios from "axios";

export const uploadPicture = async (picture) => {
  const { accessToken } = JSON.parse(localStorage.getItem('user'));
  const formData = new FormData();
  formData.append('picture', picture, picture.name);
  try {
    const upload = await axios({
      method: 'PATCH',
      url: `https://boardgamefriends.herokuapp.com/api/v1/profile`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${accessToken}` }
    })
    return upload.data.user.avatar;
  }
  catch (err) {
    console.log(err);
  }
}
