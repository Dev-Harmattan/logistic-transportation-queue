document.addEventListener('DOMContentLoaded', function() {
  fetch('http://localhost:3000/getCustomers')
  .then(response => response.json())
  .then(data => loadHtml(data.results))
  .catch(error => console.log(error));
});

function loadHtml(data){
  const table  = document.querySelector('.customers-table > tbody');
  let html = ''
  if(data.length === 0 ){
    table.innerHTML = '<tr><td class="no-data" colspan="6">No Customers Data</td></tr>'
  }else{
    data.forEach(({custom_id, customer_name, pick_up_location, drop_off_location, slot, date_alocate }) => {
      html += '<tr>';
      html += `<td>${custom_id}</td>`;
      html += `<td>${customer_name}</td>`;
      html += `<td>${pick_up_location}</td>`;
      html += `<td>${drop_off_location}</td>`;
      html += `<td>${slot}</td>`;
      html += `<td>${new Date(date_alocate).toISOString().slice(0, 10)}</td>`;
      html += '</tr>';
    });
    table.innerHTML = html;
  }
}

//form validation

const form = document.querySelector('#post_user');
let nameErrorContent = document.querySelector('.error.name');
let dropOffErrorContent = document.querySelector('.error.drop-off');
let pickUpErrorContent = document.querySelector('.error.pick-up');

form.addEventListener('submit', async function(e){
 
  let errors = {
    name: '',
    pickUp: '',
    dropOff: ''
  }

  const customer_name = form.customer_name.value;
  const pick_up_location = form.pick_up_location.value;
  const drop_off_location = form.drop_off_location.value;
  
 
  if(customer_name.length == 0){
     errors.name = "Required customer fullname";
  }

  if(pick_up_location.length == 0 ){
     errors.pickUp = 'Required pick up location full Address';
  }

  if(drop_off_location.length == 0){
     errors.dropOff = 'Required drop off location full Address';
  }

    

  if(!Object.values(errors)){
    nameErrorContent.textContent = errors.name;
    pickUpErrorContent.textContent = errors.pickUp;
    dropOffErrorContent.textContent = errors.dropOff;
    e.preventDefault();
    
  }
});


