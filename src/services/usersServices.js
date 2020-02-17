import axios from 'axios';


export const getUsers = () => {
  return axios.get('/users', {
    params: {
      limit: 500,
    }
  }).then(({ data }) => data);
};


export const createUser = payload => axios.post('/users', payload).then(({ data }) => data);


export const deleteUser = userId => axios.delete(`/users/${userId}`).then(({ data }) => data);
