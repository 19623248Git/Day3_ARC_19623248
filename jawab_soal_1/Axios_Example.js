const axios = require('axios');

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

axios.get(apiUrl)
  .then(response => {
    console.log("response.data: ",response.data);
    console.log("response.status: ",response.status);
    console.log("response.statusText: ",response.statusText);
    console.log("response.headers: ",response.headers);
    console.log("response.config: ",response.config);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });


