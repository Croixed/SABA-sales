
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

export default CompaniesController;
