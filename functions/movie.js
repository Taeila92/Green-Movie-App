var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://openapi.naver.com/v1/search/movie.json?query=당신',
  headers: { 
    'X-Naver-Client-Id': 'RIbrUrg1MfKCalUPyP3c', 
    'X-Naver-Client-Secret': 'POBE1FQli9'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
