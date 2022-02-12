import './../css/icon.css';

export const createIcon = ({
  classname = 'defalut',
  backgroundColor,
  textColor,
  label,
  onClick,
}) => {
  const icon = document.createElement('span');
  icon.innerText = label;
  icon.addEventListener('click', onClick);

  icon.className = ['c-icon', `c-icon-${classname}`].join(' ');

  icon.style.color = textColor;

  icon.style.backgroundColor = backgroundColor;

  return icon;
};
