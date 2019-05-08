
const howManyPeople = 12;
const randomPeopleUrl = `https://randomuser.me/api/?results=${howManyPeople}`;
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
}

function modalEvents(data) {
  const cards = document.querySelectorAll('#card');
  cards.forEach(card => {
    card.addEventListener('click', (event) => {
      modalHTML(event);
    });
  });
}

function modalHTML(event) {
      //const div = document.getElementById('card').parentNode;
      const modalDiv = document.createElement('div');
      galleryDiv.appendChild(modalDiv);
      const employeeGalleryModal = console.log(employeeGallery.slice());
      const firstName = event.currentTarget.children[1].children[0].textContent.split(' ')[0];
      /*console.log(employeeGalleryModal
        .filter(employee => {
          employee.name.first === event.currentTarget.children[1].children[0].textContent.split(' ')[0];
        }));*/
      console.log(employeeGallery.forEach(item => {
          if(item.name.first === firstName){
            return employeeGallery.indexOf(item);
          };
        )};
      //console.log(employeeGallery.forEach(employee => console.log(employee.name.first)));
      //console.log(employee)
      //console.log(event.currentTarget.children[1].children[0].textContent.split(' ')[0]);

      //console.log(employeeGallery.(event.currentTarget));
      //console.log(employeeGallery.findIndex( e => {
      //  event.currentTarget.textContent.includes(employeeGallery.name.first);
      //}));
      //console.log(employeeGallery.indexOf(event.target.textContent));
      //console.log(card);
      //modalDiv.innerHTML = `<h1>${data.name.first}</h1>`;

  //return data;
}
/*
modalDiv.innerHTML = `
  <div class="modal-container" display = "none">
      <div class="modal">
          <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
          <div class="modal-info-container" id="div-modal">
              <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
              <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last}</h3>
              <p class="modal-text">${data.email}</p>
              <p class="modal-text cap">${datalocation.city}</p>
              <hr>
              <p class="modal-text">${data.phone}</p>
              <p class="modal-text">${data.location.street}, ${data.location.city}, ${data.location.state} ${data.location.postcode}</p>
              <p class="modal-text">${data.dob}Birthday: 10/21/2015</p>
          </div>
      </div>
  </div>
  `;
*/

/*
function addModals() {
  const modalDiv = document.createElement('div');
  //const referenceNode = document.querySelector('script');
  //referenceNode.parentNode.insertBefore(modalDiv, referenceNode.nextSibling);
  gallery.appendChild(modalDiv);
  modalDiv.innerHTML =  `
    <div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                <h3 id="name" class="modal-name cap">name</h3>
                <p class="modal-text">email</p>
                <p class="modal-text cap">city</p>
                <hr>
                <p class="modal-text">(555) 555-5555</p>
                <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                <p class="modal-text">Birthday: 10/21/2015</p>
            </div>
        </div>
    </div>
    `;
}
*/

/*
fetch(randomPeopleUrl)
  .then(res => res.json())
  .then(data => makeGalleryHTML(data.results))
  .then(modalEvents);
*/


fetchData(randomPeopleUrl)
  .then(data => makeGalleryHTML(data.results))
  .then(modalEvents);
  //.then(addModals);
/*
function fetchData(url){
    return fetch(url)
            .then(res => res.json());
}
*/

//card.addEventListener('click', () => {console.log(card)})












/*

Modal markup:

You can use the commented out markup below as a template
for your modal, but you must use JS to create and append
it to `body`.

IMPORTANT: Altering the arrangememnt of the markup and the
attributes used may break the styles or functionality.

<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
            <h3 id="name" class="modal-name cap">name</h3>
            <p class="modal-text">email</p>
            <p class="modal-text cap">city</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>

    // IMPORTANT: Below is only for exceeds tasks
    <div class="modal-btn-container">
        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
        <button type="button" id="modal-next" class="modal-next btn">Next</button>
    </div>
</div>
*/
