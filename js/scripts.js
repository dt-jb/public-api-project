
const howManyPeople = 12;
const latinCharNationalities =  'au,br,ca,ch,de,dk,es,fi,fr,gb,ie,no,nl,nz,us';
const randomPeopleUrl = `https://randomuser.me/api/?nat=${latinCharNationalities}&results=${howManyPeople}`;
const galleryDiv = document.getElementById('gallery');
let employeeGallery = [];


function fetchData(url){
  return fetch(url)
          .then(res => res.json());
}

function makeGalleryHTML(data){
  data.map(employee => {
    const div = document.createElement('div');
    galleryDiv.appendChild(div);
    div.innerHTML = `
      <div class="card" id="card">
          <div class="card-img-container">
              <img class="card-img" src=${employee.picture.medium} alt="profile picture">
          </div>
          <div class="card-info-container">
              <h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
              <p class="card-text">${employee.email}</p>
              <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
          </div>
      </div>
    `;
    employeeGallery.push(employee);
  });
  return data;
}

function modalEvents(data) {
  const cards = document.querySelectorAll('#card');
  cards.forEach( (card, i) => {
    card.addEventListener('click', (event) => {
      modalHTML(data, i);
    });
  });
}

function modalHTML(data, i) {
  const modalDiv = document.createElement('div');
  galleryDiv.appendChild(modalDiv);
  modalDiv.innerHTML = `
    <div class="modal-container" display = "none">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container" id="div-modal">
                <img class="modal-img" src=${employeeGallery[i].picture.medium} alt="profile picture">
                <h3 id="name" class="modal-name cap">${employeeGallery[i].name.first} ${employeeGallery[i].name.last}</h3>
                <p class="modal-text">${employeeGallery[i].email}</p>
                <p class="modal-text cap">${employeeGallery[i].location.city}</p>
                <hr>
                <p class="modal-text">${employeeGallery[i].phone}</p>
                <p class="modal-text">${employeeGallery[i].location.street}, ${employeeGallery[i].location.city}, ${employeeGallery[i].location.state} ${employeeGallery[i].location.postcode}</p>
                <p class="modal-text">${employeeGallery[i].dob.date}</p>
            </div>
        </div>
        <div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
            <button type="button" id="modal-next" class="modal-next btn">Next</button>
        </div>
    </div>
    `;
  const nextButton = document.getElementById('modal-next');
  nextButton.addEventListener('click', () => {
    modalDiv.parentElement.removeChild(modalDiv);
    if(i < 11){
      modalHTML(data, i += 1);
    } else {
      modalHTML(data, i = 0);
    }
  });
  const prevButton = document.getElementById('modal-prev');
  prevButton.addEventListener('click', () => {
    modalDiv.parentElement.removeChild(modalDiv);
    if(i > 0){
      modalHTML(data, i -= 1);
    } else {
      modalHTML(data, i = 11);
    }
  });

  const closeBtn = document.getElementById('modal-close-btn');
  closeBtn.addEventListener('click', () => {
    modalDiv.parentElement.removeChild(modalDiv);
  });
}

function employeeSearch (data) {
  const searchContainerDiv = document.getElementsByClassName('search-container');
  const searchDiv = document.createElement('form');
  searchContainerDiv[0].appendChild(searchDiv);
  searchDiv.innerHTML = `
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
    </form>
  `;

  const searchInput = document.getElementById('search-input');
  const searchForm = searchInput.parentNode;
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchArr = employeeGallery.filter(employee => {
      return searchInput.value.toLowerCase() === employee.name.last || searchInput.value.toLowerCase() === employee.name.first;
    });
    //hides gallery div (#card) and shows search results html.
    const searchResultsDiv = document.createElement('div');
    const body = document.querySelector('body');
    galleryDiv.style.display = "none";
    //galleryDiv.style.visibility = "hidden";
    body.appendChild(searchResultsDiv);
    searchResultsDiv.innerHTML = `
      <div class="card" id="card">
          <div class="card-img-container">
              <img class="card-img" src=${searchArr[0].picture.medium} alt="profile picture">
          </div>
          <div class="card-info-container">
              <h3 id="name" class="card-name cap">${searchArr[0].name.first} ${searchArr[0].name.last}</h3>
              <p class="card-text">${searchArr[0].email}</p>
              <p class="card-text cap">${searchArr[0].location.city}, ${searchArr[0].location.state}</p>
          </div>
      </div>
    `;
    searchDiv.style.display = "none";
    searchDiv.style = "";
    const backBtn = document.createElement('button');
    body.appendChild(backBtn);
    backBtn.innerHTML = `
      <input type="submit" value="back" id="serach-submit" class="search-submit">
    `;
    backBtn.addEventListener('click', () => {
      galleryDiv.style.display = "block";
      galleryDiv.style = "";
      searchDiv.style.display = "block";
      searchDiv.style = "";
      searchResultsDiv.parentNode.removeChild(searchResultsDiv);
      backBtn.parentNode.removeChild(backBtn);
      searchInput.value = "";
    });

  });
}

fetchData(randomPeopleUrl)
  .then(data => makeGalleryHTML(data.results))
  .then(data => employeeSearch(data))
  .then(modalEvents);
