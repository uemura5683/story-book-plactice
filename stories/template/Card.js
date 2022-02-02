import './../css/card.css';
import { createButton } from './Button';
import { createIcon } from './Icon';

export const createcard = () => {
  const div = document.createElement('div');
  const card = `
    <svg class="bd-placeholder-img card-img-top" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
      <title>サンプル</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
    </svg>
    <div class="card-body">
      <h5 class="card-title">タイトル</h5>
      <p class="card-text">サンプルですサンプルですサンプルですサンプルです</p>
    </div>
  `;
  div.insertAdjacentHTML('afterbegin', card);

  const btn = document.createElement('div');
  btn.className="c-btn-area"
  btn.appendChild(createButton({ size: 'small', label: 'サンプル' }));
  div.appendChild(btn);

  const icon = document.createElement('div');
  icon.className="c-icon-area"
  icon.appendChild(createIcon({ classname: 'new', label: 'NEW' }));
  div.appendChild(icon);

  div.className = ['c-card'].join(' ');

  return div;
};
