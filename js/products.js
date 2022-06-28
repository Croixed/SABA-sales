

// import

// const companyController = new companiesController();

const productsContainer = document.querySelector('#list-companies');

const addProductCard = company => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productCardImg = document.createElement('img');
  productCardImg.src = company.imgUrl;
  productCardImg.classList.add('product-card-img');

  const productCardName = document.createElement('h3');
  productCardName.innerText = company.name;
  productCardName.classList.add('product-card-name');

  const productCardDesc = document.createElement('p');
  productCardDesc.innerText = company.desc;
  productCardDesc.classList.add('product-card-desc');

  const productCardDate = document.createElement('p');
  productCardDate.innerText = company.createdAt;
  productCardDate.classList.add('product-card-date');

  productCard.appendChild(productCardImg);
  productCard.appendChild(productCardName);
  productCard.appendChild(productCardDesc);
  productCard.appendChild(productCardDate);

  productsContainer.appendChild(productCard);


}




const sampleCard = document.querySelector('.card')
console.log(sampleCard.querySelector('img'));


const addProductCard2 = company => {
  const clonedCard = sampleCard.cloneNode(true);
  clonedCard.querySelector('img').src = company.imgUrl;
  clonedCard.querySelector('h5').innerText = company.name;
  clonedCard.querySelector('.card-text').innerText = company.desc;

  productsContainer.appendChild(clonedCard);
}