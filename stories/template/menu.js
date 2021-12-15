import './../css/menu.css';

export const createMenu = ({
  classname = 'defalut',
  backgroundColor,
}) => {
  const icon = document.createElement('div');
  let line_t = document.createElement('span');
  let line_m = document.createElement('span');
  let line_b = document.createElement('span');
  icon.appendChild(line_t);
  icon.appendChild(line_m);
  icon.appendChild(line_b);
  icon.className = ['c-drawer', `c-drawer-${classname}`].join(' ');
  line_t.style.backgroundColor = backgroundColor;
  line_m.style.backgroundColor = backgroundColor;
  line_b.style.backgroundColor = backgroundColor;
  return icon;
};
