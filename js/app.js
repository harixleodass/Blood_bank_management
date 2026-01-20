let donors = JSON.parse(localStorage.getItem("donors")) || [];

function addDonor() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let blood = document.getElementById("blood").value;

  if (name === "" || age === "" || blood === "") {
    alert("Fill all fields");
    return;
  }

  donors.push({ name, age, blood });
  localStorage.setItem("donors", JSON.stringify(donors));
  displayDonors();

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("blood").value = "";
}

function displayDonors(list = donors) {
  let table = document.getElementById("donorTable");
  table.innerHTML = "";

  list.forEach(d => {
    table.innerHTML += `
      <tr>
        <td>${d.name}</td>
        <td>${d.age}</td>
        <td>${d.blood}</td>
      </tr>
    `;
  });
}

function searchDonor() {
  let value = document.getElementById("search").value.toUpperCase();
  let filtered = donors.filter(d => d.blood.includes(value));
  displayDonors(filtered);
}

displayDonors();
