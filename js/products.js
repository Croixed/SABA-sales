import CompaniesController from "./productsController.js";

const companyController = new CompaniesController();

companyController.addCompany('juicer', 'lorem ipsum', 'some url', Date())
companyController.addCompany('foodstuffs', 'ipsum ipsum ipsum', 'some url 2', Date())


const productsContainer = document.querySelector('#list-companies');

const sampleCard = document.querySelector('.card')
console.log(sampleCard.querySelector('img'));


const addProductCard2 = company => {
  const clonedCard = sampleCard.cloneNode(true);
  clonedCard.querySelector('img').src = './img/lemonade.png'; // company.imgUrl; hardcoding for testing
  clonedCard.querySelector('h5').innerText = company.name;
  clonedCard.querySelector('.card-text').innerText = company.desc;

  productsContainer.appendChild(clonedCard);
}

addProductCard2(companyController.companies[0]);
addProductCard2(companyController.companies[1]);




