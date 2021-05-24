import * as axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
});

const countriesAPI = {
  getCountries() {
    return axiosInstance.get(`all`).then((response) => response.data);
  },
};

export { countriesAPI };
