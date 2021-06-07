import axios from 'axios';

/* const KEY = 'AIzaSyA3tz6-_YsM8hUabT6IbNpi5m3HFnxIQXU'; */

export default axios.create({
  baseURL: 'http://localhost:7200',
});
