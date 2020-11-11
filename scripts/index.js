import {hotels} from './HotelData.js';

//создаём новый массив из изначального
const cardTemplate = document.querySelector('#hotels').content;
const cardContainer = document.querySelector('.hotel');

const mapHotels = hotels.map (function (element) {
  return element
});

// const filterHotels = mapHotels.filter(Boolean);
var a = [1, 2, "b", 0, {}, "", NaN, 3, undefined, null, 5];

var filterHotels = mapHotels.filter(Boolean);

console.log(filterHotels);

filterHotels.sort((a, b) => a.price - b.price);


function createHotelCard(title, price, photo) {
  console.log(price);
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.hotel__img').src = photo;
  cardElement.querySelector(".hotel__name").textContent = title;
  cardElement.querySelector(".hotel__price").textContent = price;
  return cardElement;
}

function addCard(title, price, photo) {
    if (price && title && photo) {
      cardContainer.append(createHotelCard(title, price, photo));
    }
}
//обходим массив, чтоб создать карточки и добавить в конец контейнера

filterHotels.forEach(function (card) {
  addCard(card.title, card.price, card.photo);
});
