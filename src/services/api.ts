export const API_URL = 'https://hacker-news.firebaseio.com/v0';

export async function getNewStoriesIds() {
  const response = await fetch(`${API_URL}/newstories.json`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  });
  
  if (response.ok) return response.json();
  else throw new Error();
}

export async function getStorieById(id :number) {
  const response = await fetch(`${API_URL}/item/${id}.json`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  });
  
  if (response.ok) return response.json();
  else throw new Error();
}
