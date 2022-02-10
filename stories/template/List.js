import './../css/list.css';

export const createlist = ({
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
  <li class="c-list-group-item ` + addClass +`">カテゴリ</li>
  <li class="c-list-group-item">ブランド</li>
  <li class="c-list-group-item">ニュース</li>
  <li class="c-list-group-item">採用</li>
  <li class="c-list-group-item">お問い合わせ</li>
`;

  nav.insertAdjacentHTML('afterbegin', navinner);

  nav.className = ['c-list', `c-list-${classname}`].join(' ');

  return nav;
};
