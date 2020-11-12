//импорт массива
import {hotels} from './HotelData.js';

const cardTemplate = document.querySelector('#hotels').content;
const cardContainer = document.querySelector('.hotel');
const minSortButton = document.querySelector('.button-sort__down');
const maxSortButton = document.querySelector('.button-sort__up');
//новый массив
const mapHotels = hotels.map (function (element) {
  return element
});
let sortMethod = false;
//сортировка по возрастанию
function sortToggle () {
  if (sortMethod) {
      mapHotels.sort((a, b) => b.price - a.price);
  } else {
      mapHotels.sort((a, b) => a.price - b.price);
  }

  return mapHotels;
}


//функция создания карточки
function createHotelCard(title, price, photo) {
  console.log(price);
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.hotel__img').src = photo;
  cardElement.querySelector(".hotel__name").textContent = title;
  cardElement.querySelector(".hotel__price-value").textContent = price;
  return cardElement;
}
//добавление карточки, если в массиве есть данные
function addCard(title, price, photo) {
    if (price && title && photo) {
      cardContainer.append(createHotelCard(title, price, photo));
    }
}
//создание карточек из массива
sortToggle().forEach(function (card) {
  addCard(card.title, card.price, card.photo);
});

minSortButton.addEventListener('click', function () {
  cardContainer.remove();
    sortMethod = true;
  sortToggle().forEach(function (card) {
    addCard(card.title, card.price, card.photo);
  });
});
maxSortButton.addEventListener('click', function () {
  cardContainer.remove();
    sortMethod = false;
  mapHotels.forEach(function (card) {
    addCard(card.title, card.price, card.photo);
  });
});
console.log(sortMethod);
