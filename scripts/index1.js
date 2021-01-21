//импорт массива
import {hotels} from './HotelData.js';

const cardTemplate = document.querySelector('#hotels').content;
const cardContainer = document.querySelector('.hotel');
const minSortButton = document.querySelector('.button-sort__down');
const maxSortButton = document.querySelector('.button-sort__up');
//состояние
const appState = {
  sortMethod: undefined,
  visibleHotels: 3,
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
//сортировка по возрастанию
function sortToggle () {
  if (appState.sortMethod) {
    hotels.sort((a, b) => b.price - a.price);
  } else {
    hotels.sort((a, b) => a.price - b.price);
  }
  return hotels;
}

const validateHotels = () => {
  appState.hotels = hotels.filter(item => item.price).filter(item => item.photo);
};


//добавление карточки, если в массиве есть данные
const renderHotels = () => {
  validateHotels();
  appState.hotels.forEach(item => cardContainer.append(createHotelCard(item)));
};
renderHotels();
