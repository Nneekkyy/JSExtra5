//импорт массива
import {hotels} from './HotelData.js';

const cardTemplate = document.querySelector('#hotels').content;
const cardContainer = document.querySelector('.hotel');
//новый массив
const mapHotels = hotels.map (function (element) {
  return element
});
//сортировка по возрастанию

mapHotels.sort((a, b) => a.price - b.price);

//функция создания карточки
function createHotelCard(title, price, photo) {
  console.log(price);
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.hotel__img').src = photo;
  cardElement.querySelector(".hotel__name").textContent = title;
  cardElement.querySelector(".hotel__price").textContent = price;
  return cardElement;
}
//добавление карточки, если в массиве есть данные
function addCard(title, price, photo) {
    if (price && title && photo) {
      cardContainer.append(createHotelCard(title, price, photo));
    }
}
//создание карточек из массива
mapHotels.forEach(function (card) {
  addCard(card.title, card.price, card.photo);
});
