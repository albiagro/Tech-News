// Button creation

export default() => {
// Create the <button> element
const button = document.createElement('button');

// Set the attributes and class for the button
button.id = 'myButton';
button.type = 'button';
button.className = 'btn btn-primary';
button.setAttribute('data-mdb-ripple-init', '');

// Set the text content of the button
button.textContent = 'Show more news';

return button}