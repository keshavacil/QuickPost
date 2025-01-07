// export async function getAPI(url, options = {}) {
//   try {
//     console.log('Fetching URL:', url); // Log the URL
//     const token = localStorage.getItem('token');
//     if (!token) {
//       console.warn('Authorization token is missing!');
//     }
//     console.log('Authorization Token:', token); // Log the token

//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         accept: 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       ...options, // Allow additional options to be merged
//     });

//     console.log('Response Status:', response.status); // Log the response status

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log('Response Data:', data); // Log the response data
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//     throw error;
//   }
// }
