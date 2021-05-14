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
