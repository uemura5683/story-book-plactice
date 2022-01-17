import './../css/slider.css';

export const createslider = ({
  classname = 'defalut',
}) => {
  const div = document.createElement('div');

  const slider = `
    <ol class="carousel__viewport">
        <li
          tabindex="0"
          class="carousel__slide"
          style="background-image:url('https://css-modan.vercel.app/myfavorite-css/img/main/main1.png')">
            <div class="carousel__snapper"></div>
        </li>
        <li
          tabindex="0"
          class="carousel__slide"
          style="background-image:url('https://css-modan.vercel.app/myfavorite-css/img/main/main2.png')">
            <div class="carousel__snapper"></div>
        </li>
        <li
          tabindex="0"
          class="carousel__slide"
          style="background-image:url('https://css-modan.vercel.app/myfavorite-css/img/main/main3.png')">
            <div class="carousel__snapper"></div>
        </li>
    </ol>
  `;
  div.insertAdjacentHTML('afterbegin', slider);

  div.className = ['c-slider', `c-slider-${classname}`].join(' ');

  return div;
};
