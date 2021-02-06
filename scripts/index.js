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
const Image = document.querySelector('#image');
const Title = document.querySelector('#title');
const Price = document.querySelector('#price');
const popuped = document.querySelector('#popup');

//состояние
const appState = {
  sortMethod: undefined,
  visibleHotels: 2,
  hotels: [],
  isPopupOpen: false,
}

//функция создания карточки
const createHotelCard = (hotel) => {
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
const closePopuped = (e) => {
  if (e.keyCode === 27) {
    closePopup();
  }
};
document.addEventListener('keydown', closePopuped);

window.onmouseout=function(event){
  if(event.toElement===null) {
    Image.src = appState.hotels[0].photo;
    Title.textContent = appState.hotels[0].title;
    Price.textContent = appState.hotels[0].price;
    popuped.classList.add('popup_opened')
  };
}
