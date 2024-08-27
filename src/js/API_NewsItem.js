export default async(urls) => {
  const promises = urls.map(url => fetch(url));
  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map(response => response.json()));
  return data;
  }
