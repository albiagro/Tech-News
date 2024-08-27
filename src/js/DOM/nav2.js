// Second nav creation
export default() => {
const nav2 = document.createElement('nav');
nav2.className = 'navbar navbar-expand-lg navbar-light bg-body-tertiary';

const container2 = document.createElement('div');
container2.className = 'container-fluid';

const breadcrumb = document.createElement('ol');
breadcrumb.className = 'breadcrumb';

const breadcrumbItem = document.createElement('li');
breadcrumbItem.className = 'breadcrumb-item';

const breadcrumbLink = document.createElement('a');
breadcrumbLink.href = '../../..';
breadcrumbLink.textContent = 'Home';

const breadcrumbItem2 = document.createElement('li');
breadcrumbItem2.className = 'breadcrumb-item';

const breadcrumbLink2 = document.createElement('a');
breadcrumbLink2.textContent = 'Tech News';
breadcrumbLink2.style.color = 'black';

breadcrumbItem.appendChild(breadcrumbLink);
breadcrumbItem2.appendChild(breadcrumbLink2);
breadcrumb.appendChild(breadcrumbItem);
breadcrumb.appendChild(breadcrumbItem2);
container2.appendChild(breadcrumb);
nav2.appendChild(container2);
return nav2}