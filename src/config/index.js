const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://gogfilms.herokuapp.com';

export default {
  URL,
};
