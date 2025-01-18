document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const value = parseFloat(document.querySelector(".form-control").value);
  const fromUnit = document
    .querySelector("#from .dropdown-toggle")
    .textContent.trim()
    .toLowerCase();
  const toUnit = document
    .querySelector("#to .dropdown-toggle")
    .textContent.trim()
    .toLowerCase();

  if (isNaN(value) || !fromUnit || !toUnit) {
    alert("Please provide valid input and units.");
    return;
  }

  // Determine the appropriate API endpoint
  const endpoint = `${fromUnit[0]}to${toUnit[0]}`; // Example: "ctof", "ftok"

  try {
    const response = await fetch(`/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ input: value }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Conversion failed.");
    }

    const result = await response.text(); // API returns plain text (e.g., result number)
    document.getElementById("result").textContent = `Result: ${result}`;
  } catch (error) {
    document.getElementById("result").textContent =
      "Error performing conversion.";
    console.error(error);
  }
});
