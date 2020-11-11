//импорт массива
import {hotels} from './HotelData.js';

const cardTemplate = document.querySelector('#hotels').content;
const cardContainer = document.querySelector('.hotel');
const firstButton = document.querySelector('#buttoncss');
const secondButton = document.querySelector('#buttonjs');
const hotelList = document.querySelector('.hotel');
//новый массив
const mapHotels = hotels.map (function (element) {
  return element
});
//сортировка по возрастанию

mapHotels.sort((a, b) => a.price - b.price);

//функция создания карточки
function createHotelCard(title, price, photo) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.hotel__img').src = photo;
  cardElement.querySelector(".hotel__name").textContent = title;
  cardElement.querySelector(".hotel__price-value").textContent = price;
  return cardElement;
}
//добавление карточки, если в массиве есть данные
// function addCard(title, price, photo) {
//     if (price && title && photo) {
//       console.log(photo);
//       cardContainer.append(createHotelCard(title, price, photo));
//     }
// }
//вывод первых двух карточек из массива
// const sliceHotels = mapHotels.slice(0,2);
//
// sliceHotels.forEach(function (card) {
//   addCard(card.title, card.price, card.photo);
// });
//
// console.log(mapHotels);
// console.log(sliceHotels);

function filterByNull(card) {
    if (card.title && card.price && card.photo) {
        return true;
    }
    return false;
}

const filterHotels = mapHotels.filter(filterByNull);
const sliceHotels = filterHotels.slice(0,2);
filterHotels.shift();
filterHotels.shift();
sliceHotels.forEach(function (card) {
  cardContainer.append(createHotelCard(card.title, card.price, card.photo));
});

firstButton.addEventListener('click', function () {
  const sliceNewHotels = filterHotels.slice(0);
  sliceNewHotels.forEach(function (card) {
    cardContainer.append(createHotelCard(card.title, card.price, card.photo));
  });
  console.log(filterHotels);
  firstButton.classList.add('button-more_hide');
  secondButton.classList.add('button-more_hide');
});
function asd () {

  return shiftHotels;
};

secondButton.addEventListener('click', function () {
  let shiftHotels = filterHotels.shift();
  const shiftedHotels = shiftHotels.map (function (element) {
    return element
  });
  shiftedHotels(function (card) {
    cardContainer.append(createHotelCard(card.title, card.price, card.photo));
  });
  firstButton.classList.add('button-more_hide');
  secondButton.classList.add('button-more_hide');
});

// //скрипт для кнопки overflow
// mapHotels.forEach(function (card) {
//   addCard(card.title, card.price, card.photo);
// });
// function closeTwoButton() {
//   firstButton.classList.add('button-more_hide');
//   secondButton.classList.add('button-more_hide');
// };
// firstButton.addEventListener('click', function () {
//   hotelList.classList.add('hotel_show');
//   closeTwoButton();
// });
