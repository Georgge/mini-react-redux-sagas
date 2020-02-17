import axios from 'axios';


export const getUsers = () => {
  return axios.get('/users', {
    params: {
      limit: 500,
    }
  }).then(({ data }) => data);
};