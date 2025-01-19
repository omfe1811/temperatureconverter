function temperatureConvert(fromUnit, toUnit, inputTemperature) {
  const formData = new FormData();
  formData.append("input", inputTemperature);

  fetch(`http://localhost:5119/${fromUnit}to${toUnit}`, {
    method: "post",
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
    })
    .catch((error) => {
      console.error("error", error);
    });
}
temperatureConvert("c", "k", 100);
