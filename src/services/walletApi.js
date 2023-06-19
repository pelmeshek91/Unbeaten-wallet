import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unSetAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

/* AUTH */

export const registerUser = async user => {
  const { data } = await axios.post('/auth/register', user);
  return data;
};
export const loginUser = async (
  user = {
    email: 'jhfbvjfhbjmf123@gmail.com',
    password: 'qwerty123',
  }
) => {
  const { data } = await axios.post('/auth/login', user);
  setAuthHeader(data.accessToken);
  return data;
};
export const logoutUser = async () => {
  await axios.post('/auth/logout');
  unSetAuthHeader();
  return;
};
export const refreshUser = async (sid, token) => {
  const { data } = await axios.post('/auth/refresh', sid, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  setAuthHeader(data.newAccessToken);
  return data;
};

/* TRANSACTIONS */

export const getTransactionsIncome = async () => {
  const { data } = await axios('/transaction/income');
  return data;
};
export const addTransactionIncome = async body => {
  const { data } = await axios.post('/transaction/income', body);
  return data;
};
export const getTransactionsExpenses = async () => {
  const { data } = await axios('/transaction/expense');
  console.log(data);
  return data;
};
export const addTransactionExpenses = async body => {
  const { data } = await axios.post('/transaction/expense', body);
  return data;
};
export const deleteTransaction = async id => {
  const { data } = await axios.delete(`/transaction/${id}`);
  return data;
};
