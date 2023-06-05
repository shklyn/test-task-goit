import axios from 'axios';
import Notiflix from 'notiflix';
axios.defaults.baseURL = 'https://647de603af984710854a90c6.mockapi.io/';
export const fetchUsers = async () => {
  try {
    const res = await axios.get(`/users`);
    if (!res) {
      Notiflix.Notify('Oops, something went wrong');
    }
    return res;
  } catch (e) {
    console.log(e);
  }
};
