// First nav creation
import image from "../../img/alberto.png";

export default() => {
const nav1 = document.createElement('nav');
nav1.className = 'navbar navbar-expand-lg navbar-light bg-body-tertiary';
nav1.id = 'header';

const container1 = document.createElement('div');
container1.className = 'container-fluid';

const logoLink = document.createElement('a');
logoLink.className = 'navbar-brand me-2';
logoLink.href = '../../../';


const logoImg = document.createElement('img');
logoImg.src = image;
logoImg.height = 115;
logoImg.alt = 'My logo';
logoImg.loading = 'lazy';
logoImg.style.marginTop = '-1px';

logoLink.appendChild(logoImg);
container1.appendChild(logoLink);
nav1.appendChild(container1);
return nav1}