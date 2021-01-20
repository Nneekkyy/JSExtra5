//импорт массива
import {hotels} from './HotelData.js';

const cardTemplate = document.querySelector('#hotels').content;
const cardContainer = document.querySelector('.hotel');
const minSortButton = document.querySelector('.button-sort__down');
const maxSortButton = document.querySelector('.button-sort__up');
//новый массив

let sortMethod = false;
//сортировка по возрастанию
function sortToggle () {
  if (sortMethod) {
      hotels.sort((a, b) => b.price - a.price);
  } else {
    hotels.sort((a, b) => a.price - b.price);
  }
  return hotels;
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
//добавление карточки, если в массиве есть данные
const renderHotels = () => {
  hotels.forEach(item => cardContainer.append(createHotelCard(item)));
};
renderHotels();
