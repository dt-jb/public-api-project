
const howManyPeople = 12;
const randomPeopleUrl = `https://randomuser.me/api/?results=${howManyPeople}`;
const gallery = document.getElementById('gallery');

function fetchData(url){
  return fetch(url)
          .then(res => res.json());
}

function makeHTML(data){
  data.map(employee => {
    const div = document.createElement('div');
    gallery.appendChild(div);
    div.innerHTML = `
      <div class="card">
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
  });
}


fetchData(randomPeopleUrl)
  .then(data => makeHTML(data.results));












/*
API URL:

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
