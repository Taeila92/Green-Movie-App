const axios = require('axios');
const {Client_Id, Client_Secret } = process.env


exports.handler = async function (event) {
  console.log(event)
  const payload = JSON.parse(event.body)
  const { title } = payload
  let url = `https://openapi.naver.com/v1/search/movie.json?query=${title}`

  let config = {
    method: 'get',
    url,
    headers: { 
      'X-Naver-Client-Id': Client_Id, 
      'X-Naver-Client-Secret': Client_Secret
    }
  }
  try {
    const num = await axios.get(config)
    return{
      statusCode : 200,
      body : JSON.stringify(num.data)
    }
  }catch(error) {
    return {
      statusCode : error,
      body: error
    }
  }
//   axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
// })
}
