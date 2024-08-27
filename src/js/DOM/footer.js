// Footer creation

export default() => {
const footer = document.createElement('footer');
footer.className = 'text-center text-lg-start bg-body-tertiary text-muted';

const socialSection = document.createElement('section');
socialSection.className = 'd-flex justify-content-center justify-content-lg-between p-4 border-bottom';

const socialTextDiv = document.createElement('div');
socialTextDiv.className = 'me-5 d-none d-lg-block';
socialTextDiv.textContent = 'Get connected with me on social networks:';

const socialLinksDiv = document.createElement('div');

const instagramLink = document.createElement('a');
instagramLink.href = 'https://www.instagram.com/albiagro/';
instagramLink.target = '_blank';
instagramLink.className = 'me-4 text-reset';

const instagramIcon = document.createElement('i');
instagramIcon.className = 'fab fa-instagram';
instagramLink.appendChild(instagramIcon)

const linkedinLink = document.createElement('a');
linkedinLink.href = 'https://www.linkedin.com/in/alberto-agrò-0a425912a';
linkedinLink.target = '_blank';
linkedinLink.className = 'me-4 text-reset';

const linkedinIcon = document.createElement('i');
linkedinIcon.className = 'fab fa-linkedin';
linkedinLink.appendChild(linkedinIcon)

const githubLink = document.createElement('a');
githubLink.href = 'https://github.com/albiagro';
githubLink.target = '_blank';
githubLink.className = 'me-4 text-reset';

const githubIcon = document.createElement('i');
githubIcon.className = 'fab fa-github';
githubLink.appendChild(githubIcon)

socialLinksDiv.appendChild(instagramLink);
socialLinksDiv.appendChild(linkedinLink);
socialLinksDiv.appendChild(githubLink);

socialSection.appendChild(socialTextDiv);
socialSection.appendChild(socialLinksDiv);
footer.appendChild(socialSection);
return footer}