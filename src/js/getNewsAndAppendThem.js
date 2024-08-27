import getTenRows from './getTenRows.js'
import getNewsItem from './API_NewsItem.js'
import card from './DOM/card.js'

// Requiring the lodash library 
const _ = require("lodash");

 export default async(AllNews) => {

  if (_.size(AllNews) > 0) { // Only if the attempt to get all news was successful
    // Extract just first 10 news
    const NewsToBeLoaded = getTenRows(AllNews);
    
    // Create APIs to get news item
    const urls = NewsToBeLoaded.map(value => process.env.API_URL_SINGLE_ITEM + value.toString() + process.env.SINGLE_ITEM_EXTENSION)

    // Get news item
    const NewsItems = await getNewsItem(urls)

    // I create a card for each news
    _.forEach(NewsItems, function (value) {
      const date = new Date(value.time * 1000)
      background.insertBefore(card(value.title, value.url, date), myButton);
    });
  }
    
  }