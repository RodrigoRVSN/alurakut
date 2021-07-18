

const API_URL = 'https://graphql.datocms.com/'
const API_TOKEN = '2a561832e9baec09e4dac70a33f82c'


async function fetchCmsAPI(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': API_TOKEN,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllCommunities() {
  const data = await fetchCmsAPI(`
    {
      allCommunities{
        title
        imageUrl
        group
        creatorSlug
      }
    }
  `);
  return data.allCommunities;
}


export default { getAllCommunities }
