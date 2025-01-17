document.addEventListener("DOMContentLoaded", () => {
  const fromUnitButton = document.querySelector("#from .dropdown-toggle");
  const toUnitButton = document.querySelector("#to .dropdown-toggle");
  const fromUnitOptions = document.querySelectorAll("#from .dropdown-item");
  const toUnitOptions = document.querySelectorAll("#to .dropdown-item");
  const form = document.getElementById("conversionForm");
  const inputDataField = document.getElementById("inputData");
  const convertedDataDisplay = document.getElementById("convertedData");

  let fromUnit = null;
  let toUnit = null;
  // Handle dropdown selections for "From" unit
  fromUnitOptions.forEach((item) => {
    item.addEventListener("click", (e) => {
      fromUnit = e.target.textContent.trim();
      fromUnitButton.textContent = fromUnit; // Update button text
    });
  });

  // Handle dropdown selections for "To" unit
  toUnitOptions.forEach((item) => {
    item.addEventListener("click", (e) => {
      toUnit = e.target.textContent.trim();
      toUnitButton.textContent = toUnit; // Update button text
    });
  });

  // Example: Log the selected units
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!fromUnit || !toUnit) {
      alert("Please select both 'From' and 'To' units.");
      return;
    }
    console.log(`Converting from ${fromUnit} to ${toUnit}`);
    // You can add the conversion logic or API call here
  });
});
form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission

  const inputData = inputDataField.value.trim();
  if (!inputData) {
    alert("Please enter some data!");
    return;
  }

  function Calculate() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
});
