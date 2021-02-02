//импорт массива
import {hotels} from './HotelData.js';

const cardTemplate = document.querySelector('#hotels').content;
const popup = document.querySelector('.popup');
const cardContainer = document.querySelector('.hotel');
const minSortButton = document.querySelector('.button-sort__down');
const maxSortButton = document.querySelector('.button-sort__up');
const showMinButton = document.querySelector('#buttonjs');
const showMoreButton = document.querySelector('#buttoncss');
const closeButton = document.querySelector('.popup__close');
//состояние
const appState = {
  sortMethod: undefined,
  visibleHotels: 2,
  hotels: [],
  isPopupOpen: false,
}

//функция создания карточки
const createHotelCard = (hotel) => {
  console.log(hotel);
  const cardElement = cardTemplate.cloneNode(true);
  const hotelPhoto = cardElement.querySelector('.hotel__img');
  const hotelTitle = cardElement.querySelector('.hotel__name');
  const hotelPrice = cardElement.querySelector('.hotel__price-value');
  hotelPhoto.src = hotel.photo;
  hotelTitle.textContent = hotel.title;
  hotelPrice.textContent = hotel.price;

  return cardElement;
}

function sortToggle () {
  if (appState.sortMethod) {
    hotels.sort((a, b) => b.price - a.price);
    renderHotels();
  } else {
    hotels.sort((a, b) => a.price - b.price);
    renderHotels();
  }
  return appState.hotels;
}

const validateHotels = () => {
  appState.hotels = hotels.filter(item => item.price).filter(item => item.photo);
};


const renderHotels = () => {
  cardContainer.textContent = '';
  validateHotels();
  const hotelsToRender = appState.hotels.slice(0, appState.visibleHotels)
  hotelsToRender.forEach(item => cardContainer.append(createHotelCard(item)));
};
const hideButton = () => {
  showMinButton.classList.add('button-more_hide');
  showMoreButton.classList.add('button-more_hide');
}
renderHotels();

const addAppStateVisible = () => {
  appState.visibleHotels++;
}
showMinButton.addEventListener('click', function () {
  if (appState.hotels.length!=appState.visibleHotels) {
    addAppStateVisible();
    renderHotels();
  } else {
    hideButton();
  }
});

showMoreButton.addEventListener('click', function () {
    appState.visibleHotels = appState.hotels.length;
    addAppStateVisible();
    renderHotels();
    hideButton();
})

minSortButton.addEventListener('click', function () {
  appState.sortMethod = true;
  sortToggle();
});
maxSortButton.addEventListener('click', function () {
  appState.sortMethod = false;
  sortToggle();
});
const closePopup = () => {
  popup.classList.remove('popup_opened');
};
closeButton.addEventListener('click', closePopup);


const nums = [2,5,1,3,4,7]
const n = 3;
let i = 0;
const a = nums.slice(0, n);
const b = nums.slice(n, nums.length);
console.log(a);
console.log(b);

let c=[];
c.push(a[i], b[i]);
c.push(a[i+1], b[i+1]);
c.push(a[i+2], b[i+2]);
console.log(c);
//   while (i < n) {
//     i++;
//
//     const d = a[i-1];
//     const e = b[i-1];
//    return d,e;
//   }
//
// let c = [];
// c.push(d, e);
// console.log(c);
