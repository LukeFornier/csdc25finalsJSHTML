let selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  let formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

//Retrieve the data
function readFormData() {
  let formData = {};
  let getM = document.getElementById("genderMale");
  let getF = document.getElementById("genderFem");
  formData["firstName"] = document.getElementById("firstName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["nationality"] = document.getElementById("nationality").value;
  formData["email"] = document.getElementById("email").value;
  formData["phone"] = document.getElementById("phone").value;
  formData["bday"] = document.getElementById("bday").value;
  formData["visType"] = document.getElementById("visType").value;

  if (getM.checked == true) {
    formData["gender"] = document.getElementById("genderMale").value;
  } else if (getF.checked == true) {
    formData["gender"] = document.getElementById("genderFem").value;
  }

  return formData;
}

//Insert the data
function insertNewRecord(data) {
  let table = document
    .getElementById("touristReg")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.firstName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.gender;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.nationality;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.email;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.phone;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.bday;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.visType;
  cell8 = newRow.insertCell(8);
  cell8.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;

  resetForm();
}

//Edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("gender").value = selectedRow.cells[2].innerHTML;
  document.getElementById("nationality").value = selectedRow.cells[3].innerHTML;
  document.getElementById("email").value = selectedRow.cells[4].innerHTML;
  document.getElementById("phone").value = selectedRow.cells[5].innerHTML;
  document.getElementById("bday").value = selectedRow.cells[6].innerHTML;
  document.getElementById("visType").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.firstName;
  selectedRow.cells[1].innerHTML = formData.lastName;
  selectedRow.cells[2].innerHTML = formData.gender;
  selectedRow.cells[3].innerHTML = formData.nationality;
  selectedRow.cells[4].innerHTML = formData.email;
  selectedRow.cells[5].innerHTML = formData.phone;
  selectedRow.cells[6].innerHTML = formData.bday;
  selectedRow.cells[7].innerHTML = formData.visType;

  resetForm();
  readFormData();
}

//Delete the data
function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("touristReg").deleteRow(row.rowIndex);
    resetForm();
  }
}

//Reset the data
function resetForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("nationality").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("bday").value = "";
  document.getElementById("visType").value = "";
  selectedRow = null;
}
