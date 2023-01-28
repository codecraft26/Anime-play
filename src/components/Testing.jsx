import React from 'react'

const Testing = () => {

    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://anime-db.p.rapidapi.com/anime',
      params: {
        page: '1',
        size: '10',
        search: 'Fullmetal',
        genres: 'Fantasy,Drama',
        sortBy: 'ranking',
        sortOrder: 'asc'
      },
      headers: {
        'X-RapidAPI-Key': '59600a2214msh23b8b060a2cefd0p12ac12jsn6e6b2ef6c4d9',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });


  return (
    <div>Testing</div>
  )
}

export default Testing