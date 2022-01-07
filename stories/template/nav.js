import './../css/nav.css';

export const createnav = ({
}) => {
  const nav = document.createElement('ul');

  const navinner = `
    <li class="c-nav-item">
      <a class="c-nav-link active" aria-current="page" href="#">CATEGORY</a>
    </li>
    <li class="c-nav-item">
      <a class="c-nav-link" href="#">RANKING</a>
    </li>
    <li class="c-nav-item">
      <a class="c-nav-link" href="#">RECOMMEND</a>
    </li>
    <li class="c-nav-item">
      <a class="c-nav-link disabled" href="#" tabindex="-1" aria-disabled="true">NEWS</a>
    </li>
  `;
  nav.insertAdjacentHTML('afterbegin', navinner);

  nav.className = ['c-nav'].join(' ');

  return nav;
};
