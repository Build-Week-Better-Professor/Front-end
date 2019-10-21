import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
      //  baseURL: 'https://better-professor-backend.herokuapp.com/',
       baseURL:'localhost:5000/users/login',
       headers: {
        Authorization: token
       }
  })
}