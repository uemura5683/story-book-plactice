import './../css/alert.css';

export const createAlert = ({
  classname = 'defalut',
  backgroundColor,
  borderColor,
  textColor,
  label,
  onClick,
}) => {
  const alert = document.createElement('span');
  alert.innerText = label;
  alert.addEventListener('click', onClick);

  alert.className = ['c-alert', `c-alert-${classname}`].join(' ');

  alert.style.color = textColor;

  alert.style.borderColor = borderColor;

  alert.style.backgroundColor = backgroundColor;

  return alert;
};
