// ==UserScript==
// @name        Steam Currency Exchange
// @namespace   https://github.com/Klairm
// @include     https://store.steampowered.com/*
// @match       https://store.steampowered.com/*
// @version     1.0
// @author      Klairm
// @description Convert currencies in steam store

// ==/UserScript==

const CURRENCY_VALUE = 0.0051;

var pricesClasses = [
  ".discount_final_price",
  ".price",
  ".game_area_dlc_price",
];

function getConvertedPrice(price) {
  return  parseFloat(price * CURRENCY_VALUE);
}

function editPrices(matchedClasses) {
  if (matchedClasses.length != 0) {
    matchedClasses.forEach((prices) => {


      var price = prices.textContent.split(" ")[1];
      if (price == undefined || isNaN(parseFloat(price))) return;

      prices.textContent = `${getConvertedPrice(parseFloat(price.replace(".", ""))).toFixed(2)}€ `;
    });
  }
}

function main() {
  pricesClasses.forEach((className) => {
    matchedPricesClasses = document.querySelectorAll(className);
    editPrices(matchedPricesClasses);
  });
}

main();
