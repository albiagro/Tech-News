import "../scss/styles.scss"; // Import mdb and my custom style

// Import my font
var link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute("href", "https://fonts.cdnfonts.com/css/sugo-pro-classic");
document.head.appendChild(link);

// Import mdb js
import { Ripple, initMDB } from "mdb-ui-kit/js/mdb.es.min.js"; // Import needed modules

window.Ripple = Ripple;

initMDB({ Ripple }); // Initialize imported modules to enable data-attribute init

// Import DOM elements
import background from "./DOM/background.js";
import nav1 from "./DOM/nav1.js";
import nav2 from "./DOM/nav2.js";
import card from './DOM/card.js'
import footer from "./DOM/footer.js";
import button from "./DOM/buttonShowMore.js";

// Import function to get all news
import getNews from "./API_AllNews.js";

// Import function to show more news
import getAndShowNews from "./getNewsAndAppendThem.js";

// DOM creation
document.body.appendChild(nav1());
document.body.appendChild(nav2());

const myBackground = background();
document.body.appendChild(myBackground);

try {
  // Trying first API to get all news
  const AllNews = await getNews();
  getAndShowNews(AllNews); // At first run I load 10 news

  const myButton = button();
  myButton.addEventListener("click", function () {
    getAndShowNews(AllNews);
  }); // If there are still news to be loaded, I run the function to get 10 more news and append them

  myBackground.appendChild(myButton);
  
} catch (error) {
  console.log("Error while getting news: " + error);

  myBackground.appendChild(card("Error!", "There was an error while loading news.", Date.now, error)) // Display the error message as a card

}

document.body.appendChild(footer());
