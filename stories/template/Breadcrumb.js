import './../css/breadcrumb.css';

export const createbreadcrumb = ({
}) => {
  const nav = document.createElement('nav');

  const breasbrumb = `
    <ol class="c-breadcrumb_inner">
      <li class="c-breadcrumb_item"><a href="#">Home</a></li>
      <li class="c-breadcrumb_item"><a href="#">Library</a></li>
      <li class="c-breadcrumb_item" aria-current="page">Data</li>
    </ol>
  `;
  nav.insertAdjacentHTML('afterbegin', breasbrumb);

  nav.className = ['c-breadcrumb'].join(' ');

  return nav;
};
