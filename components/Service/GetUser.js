import { getAPI } from './service';

async function fetchData() {
  const apiUrl = 'https://thundering-adara-mramitdas-10783ebf.koyeb.app/api/v1/user/users/e1726dfa-9078-4153-822d-97323bf9a38a';

  try {
    const data = await getAPI(apiUrl);
    // console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();
export default fetchData
