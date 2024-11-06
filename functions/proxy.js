const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const apiUrl = 'https://0sr024r8-3000.asse.devtunnels.ms/api/dokter/'; // Ganti dengan URL API yang Anda tuju
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      // Tambahkan header lain jika diperlukan
    },
  });

  const data = await response.json();
  
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
