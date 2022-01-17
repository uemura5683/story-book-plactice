import './../css/pagination.css';

export const createpagination = ({
  classname = 'defalut',
  backgroundColor,
  textColor,
  label,
  onClick,
}) => {
  const nav = document.createElement('nav');

  const pagination = `
    <ul class="c-pagination__inner">
      <li class="c-page-item"><a class="c-page-link c-page-prev" href="#">Previous</a></li>
      <li class="c-page-item"><a class="c-page-link" href="#">1</a></li>
      <li class="c-page-item"><a class="c-page-link" href="#">2</a></li>
      <li class="c-page-item"><a class="c-page-link" href="#">3</a></li>
      <li class="c-page-item"><a class="c-page-link c-page-next" href="#">Next</a></li>
    </ul>
  `;
  nav.insertAdjacentHTML('afterbegin', pagination);

  nav.className = ['c-pagination', `c-pagination-${classname}`].join(' ');

  return nav;
};
