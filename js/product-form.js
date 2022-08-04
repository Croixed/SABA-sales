import CompaniesController from "./productsController.js";

const companiesController = new CompaniesController();

const form = document.querySelector("#main-form");

form.onsubmit = e => {
  e.preventDefault();
  const name = e.target.querySelector("#product-title").value;
  const description = e.target.querySelector("#description").value;
  const imgUrl = e.target.querySelector("#image-url").value;
  // const createdAt = new Date();

  console.log("inside form js: ", description);

  companiesController.addCompany(name, description, imgUrl);

  e.target.reset(); // resets input fields
}

