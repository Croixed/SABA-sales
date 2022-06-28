import CompaniesController from "./productsController.js";

const companyController = new CompaniesController();


const productsContainer = document.querySelector('#list-companies');
const sampleCard = document.querySelector('.card')

const addProductCard = company => {
  const clonedCard = sampleCard.cloneNode(true);
  clonedCard.querySelector('img').src = './img/lemonade.png'; // company.imgUrl; hardcoding for testing
  clonedCard.querySelector('h5').innerText = company.name;
  clonedCard.querySelector('.card-text').innerText = company.desc;

  productsContainer.appendChild(clonedCard);
}


// samples
// companyController.addCompany('juicer', 'lorem ipsum', 'some url', Date())
//companyController.addCompany('foodstuffs', 'ipsum ipsum ipsum', 'some url 2', Date())

// adding samples to DOM
// addProductCard(companyController.companies[0]);
// addProductCard(companyController.companies[1]);



const loadLocalSamples = () => {
  if (!localStorage.getItem('companies')) {
    const sampleController = new CompaniesController();
    sampleController.addCompany('juicer', 'lorem ipsum', 'some url', Date())
    sampleController.addCompany('foodstuffs', 'ipsum ipsum ipsum', 'some url 2', Date())
    localStorage.setItem('companies', JSON.stringify(sampleController.companies));
  }
  
}

loadLocalSamples();