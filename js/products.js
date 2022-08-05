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
    sampleController.addCompany('Virtual Insanity', 'A virtual reality store and gaming center. Try out a headset on our premises, rent a headset for a week at a time, or buy one to keep.', 'https://i.imgur.com/AR31QH3.png', Date())
    sampleController.addCompany('Microsoft', 'Microsoft is the largest vendor of computer software in the world. It is also a leading provider of cloud computing services, computer and gaming hardware, search and other online services.', 'https://i.imgur.com/ZuOC8BT.png', Date())
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