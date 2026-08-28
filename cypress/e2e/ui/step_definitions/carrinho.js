const {
  Given,
  When,
  Then,
} = require('@badeball/cypress-cucumber-preprocessor');
const homePage = require('../../../pages/HomePage');
const productPage = require('../../../pages/ProductPage');
const cartPage = require('../../../pages/CartPage');

const products = {
  phone: 'Samsung galaxy s6',
  monitor: 'Apple monitor 24',
  computer: 'Sony vaio i5',
};

function addProduct(category, productName) {
  homePage.visit();
  homePage.selectCategory(category);
  homePage.openProduct(productName);
  productPage.addToCart();
}

Given('que acesso a página inicial para realizar uma compra', () => {
  homePage.visit();
});

When('adiciono um celular {string} ao carrinho', (productName) => {
  products.phone = productName;
  addProduct('Phones', productName);
});

When('adiciono um monitor {string} ao carrinho', (productName) => {
  products.monitor = productName;
  addProduct('Monitors', productName);
});

When('adiciono um computador {string} ao carrinho', (productName) => {
  products.computer = productName;
  addProduct('Laptops', productName);
});

When('acesso o carrinho de compras', () => {
  homePage.goToCart();
});

Then('os três produtos devem estar presentes no carrinho', () => {
  cartPage.assertProductExists(products.phone);
  cartPage.assertProductExists(products.monitor);
  cartPage.assertProductExists(products.computer);
});

When('removo o monitor {string}', (productName) => {
  cartPage.removeProduct(productName);
});

When('atualizo a página do carrinho', () => {
  cartPage.refresh();
});

Then('o monitor {string} não deve estar presente', (productName) => {
  cartPage.assertProductDoesNotExist(productName);
});

Then(
  'devem restar apenas o celular {string} e o computador {string}',
  (phone, computer) => {
    cartPage.assertOnlyProducts([phone, computer]);
  }
);
