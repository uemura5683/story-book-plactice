import './../css/spinners.css';

export const createSpinners = ({
}) => {
  const div = document.createElement('div');

  const breasbrumb = `
  <div class="c-spinner-border" role="status">
    <span class="c-visually-hidden">Loading...</span>
  </div>
  `;
  div.insertAdjacentHTML('afterbegin', breasbrumb);

  div.className = ['c-spinners'].join(' ');

  return div;
};