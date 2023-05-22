

// Make a get and post request
// if else statement to append button to dom
// onclick function to append to dom: Koala is ready for transport

console.log( 'js' );

// Add a Koala to the database. 
// Make a form with the appropriate info. 

function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  fetch('/koalas').then((response) => {
  console.log('Response received:', response);
  return response.json();   
  }).then((koalas) => {
    console.log('HERE!!!!', koalas)
    let contentDiv = document.querySelector('#viewKoalas');
    for (let koala of koalas) {
      contentDiv.innerHTML += `
          <tr>
            <td>${koala.name}</td>
            <td>${koala.age}</td>
            <td>${koala.gender}</td>
            <td>${koala.checked}</td>
            <td>${koala.note}</td>
            <td>Mark Ready</td>
            <td>Remove</td>
          </tr>
      `;
    }
  }).catch((error) => {
    console.log(error);
  });
} // end getKoalas

// Save the koala in the database
function saveKoala(event){
  event.preventDefault();
  let name = document.querySelector('#nameIn').value;
  let age = document.querySelector('#ageIn').value;
  let ready = document.querySelector('#readyForTransferIn').value;
  let gender = document.querySelector('#genderIn').value;
  let note = document.querySelector('#notesIn').value;

  let koalasToSubmit = {
    name: name,
    age: age,
    ready: ready,
    gender: gender,
    note: note
  }
console.log(koalasToSubmit);
  fetch('/koalas', {
    method: 'POST',
    body: JSON.stringify(koalasToSubmit),
    headers: {
      "Content-Type": "application/json" 
    }
  }).then((response) => {
    console.log('TEST response here:', response.json());
  })
  
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 getKoalas()
}

// getKoalas();



function deleteRow(event) {
  event.target.parentElement.parentElement.remove();
}