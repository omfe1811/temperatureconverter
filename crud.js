//ADD NEW PERSON
// addPersonForm , addpersonbutton,name,age
function addNewPerson() {
  //capture name
  let inputNumber = document.getElementById("input-number").value;
  let fromUnit = document.querySelector("#from-select").value;
  let toUnit = document.querySelector("#to-select").value;
  // console
  console.log(inputNumber);
}
addNewPerson();

/* fetch("http://localhost:5188/addperson", {
    method: "POST",

    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("error sending request to server");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      //add also alert
      alert(data);
      //call
      getAllPeople();
      document.querySelector("#name").value = ""; // Clear Name field
      document.querySelector("#age").value = ""; // Clear Age field
    })
    .catch((error) => {
      console.error("error", error);
    });
} */
