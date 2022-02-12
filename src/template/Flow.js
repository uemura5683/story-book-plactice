import './../css/flow.css';

export const createflow = ({
  classname = 'defalut',
  addClass = '',
}) => {
  const div = document.createElement('div');

  switch( true ) {
    case ( classname == 'focus' ):
        addClass = 'active';
      break;
    default:
        addClass = '';
      break;
  }

  const navinner = `
  <ol class="action-steps step4">
    <li class="flow-ttl active"><span class="number">①</span> ショッピングカート</li>
    <li><span class="number">②</span> 配送先・お支払い方法選択</li>
    <li><span class="number">③</span> ご注文内容確認</li>
    <li class="last"><span class="number">④</span> ご注文完了</li>
  </ol>
`;

  div.insertAdjacentHTML('afterbegin', navinner);

  div.className = ['action-steps-wrap', `c-nav-${classname}`].join(' ');

  return div;
};
