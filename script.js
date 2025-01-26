document.getElementById("submit-button").addEventListener("click", () => {
  let fromUnit = document.getElementById("from-select").value;
  let toUnit = document.getElementById("to-select").value;
  let inputTemperature = document.getElementById("input-number").value;
  let convertedTemperature = document.getElementById("convertedData");

  // Log the values when the button is clicked
  console.log("Starting fetch...");
  console.log(`Request URL: http://localhost:5119/${fromUnit}to${toUnit}`);
  console.log(`fromUnit: ${fromUnit}`);
  console.log(`toUnit: ${toUnit}`);
  console.log(`Input Temperature: ${inputTemperature}`);

  // Call the temperatureConvert function with the fetched values
  temperatureConvert(fromUnit, toUnit, inputTemperature, convertedTemperature);
});
function temperatureConvert(
  fromUnit,
  toUnit,
  inputTemperature,
  convertedTemperature
) {
  const formData = new FormData();
  formData.append("input", inputTemperature);

  fetch(`http://localhost:5119/${fromUnit}to${toUnit}`, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed fatch data from backend");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      convertedTemperature.innerHTML = `${data.toFixed(
        2
      )}°${toUnit.toUpperCase()}`;
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}
