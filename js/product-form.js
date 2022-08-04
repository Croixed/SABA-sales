import CompaniesController from "./productsController.js";

const companiesController = new CompaniesController();

const form = document.querySelector("#main-form");

form.onsubmit = e => {
  e.preventDefault();
  const name = e.target.querySelector("#product-title").value;
  const desc = e.target.querySelector("#description").value;
  const imgUrl = e.target.querySelector("#image-url").value;
  // const createdAt = new Date();

  console.log("inside form js: ", desc);
  
  companiesController.addCompany(name, desc, imgUrl);

  e.target.reset(); // resets input fields
}

