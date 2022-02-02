import './../css/header.css';
import { createButton } from './Button';

export const createHeader = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const header = document.createElement('header')
      , wrapper = document.createElement('div');

  wrapper.className = 'wrapper';
  
  /**
   * logo
   */
  const logo = `
    <h1 class="l-header-logo">
      <a class="l-header-logo_link" href="#">
        <img
          class="l-header-logo_img"
          src="https://css-modan.vercel.app/myfavorite-css/img/logo.png"
          width="480"
          height="60"
        >
      </a>
    </h1>
  `;
  wrapper.insertAdjacentHTML('afterbegin', logo);

  /**
   * button
   */
  const account = document.createElement('div');
  account.className="l-header-button"
  if (user) {
    account.appendChild(createButton({ size: 'small', label: 'Log out', onClick: onLogout }));
  } else {
    account.appendChild(createButton({ size: 'small', label: 'Log in', onClick: onLogin }));
    account.appendChild(createButton({size: 'small', label: 'Sign up', onClick: onCreateAccount, primary: true})
    );
  }
  wrapper.appendChild(account);
  header.appendChild(wrapper);

  return header;
};
