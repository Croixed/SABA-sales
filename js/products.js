import CompaniesController from "./productsController.js";

const companiesController = new CompaniesController();


const productsContainer = document.querySelector('#list-companies');
const sampleCard = document.querySelector('.card')

const addProductCard = company => {
  const clonedCard = sampleCard.cloneNode(true);
  clonedCard.querySelector('img').src = './img/lemonade.png'; // company.imgUrl; hardcoding for testing
  clonedCard.querySelector('h5').textContent = company.name;
  clonedCard.querySelector('.card-text').textContent = company.desc;

  productsContainer.appendChild(clonedCard);
}


const loadLocalSamples = () => {
  if (!localStorage.getItem('companies')) {
    const sampleController = new CompaniesController();
    sampleController.addCompany('juicer', 'lorem ipsum', 'some url', Date())
    sampleController.addCompany('foodstuffs', 'ipsum ipsum ipsum', 'some url 2', Date())
    sampleController.addCompany('coffee', 'words words words words', 'some url 3', Date())
    localStorage.setItem('companies', JSON.stringify(sampleController.companies));
  }
}

const renderCardsFromController = () => {
  companiesController.companies.forEach(company => addProductCard(company));
}

loadLocalSamples();
companiesController.loadLocalStorage();
renderCardsFromController()