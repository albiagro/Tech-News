// Card creation

export default(title, link, date, error) => {
// Create the main <div> element and add the class
const card = document.createElement('div');
card.className = 'card text-bg-light mb-3';

// Create the card-body <div> and add the class
const cardBody = document.createElement('div');
cardBody.className = 'card-body';

// Create the <h5> element for the card title and add the class and text
const cardTitle = document.createElement('h2');
cardTitle.className = 'card-title';
cardTitle.textContent = title;

// Create the <p> element for the card text and add the class and text
const cardText = error== null ? document.createElement('a') : document.createElement('p'); // If the API got error, I create the card as error message with <p> instead of <a>
cardText.className = 'card-text';
cardText.href = link;
cardText.target = "_blank"
cardText.textContent = link;

// Append the card title and text to the card-body
cardBody.appendChild(cardTitle);
cardBody.appendChild(cardText);

// Create the card-footer <div> and add the class and text
const cardFooter = document.createElement('div');
cardFooter.className = 'card-footer text-muted';
cardFooter.textContent = date;

// Append the card-body and card-footer to the main card <div>
card.appendChild(cardBody);
card.appendChild(cardFooter);

return card}