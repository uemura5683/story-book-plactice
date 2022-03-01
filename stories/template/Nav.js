import './../css/nav.css';

export const createnav = ({
  classname = 'defalut',
  addClass = '',
}) => {
  const nav = document.createElement('ul');

  switch( true ) {
    case ( classname == 'focus' ):
        addClass = 'active';
      break;
    default:
        addClass = '';
      break;
  }

  const navinner = `
  <li class="c-nav-item">
    <a class="c-nav-link ` + addClass +`" aria-current="page" href="#">CATEGORY</a>
    <div class="c-nav-megamenu">
      <ul>
        <li>aaa</li>
        <li>bbb</li>
        <li>ccc</li>
      </ul>
    </div>
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

  nav.className = ['c-nav', `c-nav-${classname}`].join(' ');

  return nav;
};
