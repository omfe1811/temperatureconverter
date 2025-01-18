function celsiusConvert() {
  let;
}

//ADD NEW PERSON
// addPersonForm , addpersonbutton,name,age
function addNewPerson() {
  //capture name
  let inputNumber = document.querySelector("#input-number").value;
  let fromUnit = document.querySelector("#from-select").value;
  let toUnit = document.querySelector("#to-select").value;
  // console
  console.log(inputNumber, fromUnit);
}
// we create a virtual form
/* const formData = new FormData();
  formData.append("Name", name);
  formData.append("Age", age);
 */
//FETCH POST REQUEST
// headers watch !!!!
//we need to write a header and send form
//headers show what kind of data we will send
//must be same as
// whe we use formData browser automatically sets Content-Type
//that is why we did not use Content-Type
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
