export default async() => {
    const response = await fetch(process.env.API_URL_ALL_NEWS);
    const newsAll = await response.json();
    return newsAll;
  }