import CompaniesController from "./productsController.js";

const companiesController = new CompaniesController();


const productsContainer = document.querySelector('#list-companies');
const sampleCard = document.querySelector('.card')

const addProductCard = company => {
  const clonedCard = sampleCard.cloneNode(true);
  //clonedCard.querySelector('img').src = './img/lemonade.png'; // company.imgUrl; hardcoding for testing
  clonedCard.querySelector('img').src = company.imageUrl;
  clonedCard.querySelector('h5').textContent = company.name;
  clonedCard.querySelector('.product-card-text').textContent = company.description;

  productsContainer.appendChild(clonedCard);
}


const loadLocalSamples = () => {
  if (!localStorage.getItem('companies')) {
    const sampleController = new CompaniesController();
    sampleController.addCompany('juicer', 'lorem ipsum', 'https://i.imgur.com/AR31QH3.png', Date())
    sampleController.addCompany('foodstuffs', 'ipsum ipsum ipsum', 'https://i.imgur.com/iFo5o3E.png', Date())
    // sampleController.addCompany('coffee', 'words words words words', 'some url 3', Date())
    localStorage.setItem('companies', JSON.stringify(sampleController.companies));
  }
}

console.log(companiesController.companies);
const renderCardsFromController = () => {
  companiesController.companies.forEach(company => addProductCard(company));
}

loadLocalSamples();
companiesController.loadLocalStorage();
renderCardsFromController()