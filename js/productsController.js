
class CompaniesController {

  constructor(currentId=0) {
    this.companies = [];
    this.currentId = currentId;
  }

  addCompany(name, desc, imgUrl, createdAt) {
    let company = {
      name: name, 
      desc: desc,
      imgUrl: imgUrl,
      createdAt: createdAt,
      id: this.currentId++,
    }

    this.companies.push(company);
  }

  loadLocalStorage() {
    const storageProducts = localStorage.getItem('companies');
    if (storageProducts) {
      const companies = JSON.parse(storageProducts);
      companies.forEach(company => this.companies.push(company))
    }
  }
  
}

// const companyController = new CompaniesController();

// companyController.addCompany('juicer', 'lorem ipsum', 'some url', Date())
// companyController.addCompany('foodstuffs', 'ipsum ipsum ipsum', 'some url 2', Date())

// console.log(companyController.companies);

export default CompaniesController;
