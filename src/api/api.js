
const authApiKey = import.meta.env.VITE__PEXEL_API_KEY

export const url = 'https://pexelsdimasv1.p.rapidapi.com/v1/curated?per_page=15&page=1';


export const options = {
    method: 'GET',
    headers: {
      Authorization: authApiKey,
      'X-RapidAPI-Key': '9297fea8a1mshd789ee9e3c02816p162c6ejsnfdb57fc08fe6',
      'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
    }
  };