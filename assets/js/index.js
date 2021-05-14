document.addEventListener('DOMContentLoaded', function() {
  fetch('http://localhost:3000/getCustomers')
  .then(response => response.json())
  .then(data => loadHtml(data.results))
  .catch(error => console.log(error));
});

function loadHtml(data){
  const table  = document.querySelector('.customers-table > tbody');
  console.log(data)
  let html = ''
  if(data.length === 0 ){
    table.innerHTML = '<tr><td class="no-data" colspan="4">No Customers Data</td></tr>'
  }else{
    data.forEach(({custom_id, customer_name, pick_up_location, drop_off_location }) => {
      html += '<tr>';
      html += `<td>${custom_id}</td>`;
      html += `<td>${customer_name}</td>`;
      html += `<td>${pick_up_location}</td>`;
      html += `<td>${drop_off_location}</td>`;
      html += '</tr>';
    });
    table.innerHTML = html;
  }
}
