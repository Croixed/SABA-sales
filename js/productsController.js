
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

    // working:
    this.save({name, description, imageUrl});

    // working:
    // let id = 10;
    // this.update({id, name, description, imageUrl});

    // working: logs found item to console
    // this.findById(1);

    // working: deletes item with passed in id
    // this.delete(6);

  }

  save({name, description, imageUrl}) {
    const data = { name,  description, imageUrl };
    console.log("running save method", data);

    fetch('http://localhost:8080/item', {
    method: 'POST',
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

  update({id, name, description, imageUrl}){
    const data = {id, name,  description, imageUrl};
    const url = `http://localhost:8080/item/${id}`;
    fetch(url, {
    method: 'PUT',
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

  async delete(itemId){
      await fetch(`http://localhost:8080/item/${itemId}`, { method: 'DELETE' })
      alert(`Item ${itemId} deleted`);
      // delete gives no responses so there's nothing to parse and wait or catch?
  }

  findById(itemId){
      fetch(`http://localhost:8080/item/${itemId}`)
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
