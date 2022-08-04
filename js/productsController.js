
class CompaniesController {

  constructor(currentId=0) {
    this.companies = [];
    this.currentId = currentId;
  }

  addCompany(name, description, imageUrl) {
    let company = {
      name: name, 
      description: description,
      imageUrl: imageUrl,
      id: this.currentId++,
    }

    this.companies.push(company);

    // save to local storage, append to array if it exists
    if (localStorage.getItem('companies')) {
      const companies = JSON.parse(localStorage.getItem('companies'));
      companies.push(company);
      localStorage.setItem('companies', JSON.stringify(companies));
    }

    //this.uploadItem({name, description, imageUrl });
    this.save({name, description, imageUrl});

  }

  save({name, description, imageUrl}) {
    const data = { name,  description, imageUrl };
    console.log("running save method", data);

    fetch('http://localhost:8080/item', {
    method: 'POST', // or 'POST'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
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
