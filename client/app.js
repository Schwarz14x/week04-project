const form = document.querySelector("form");

async function handleSubmit(event) {
  event.preventDefault();

  // get the information from our form as an object
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // call our API
  const response = await fetch("http://localhost:8080/premier_league", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();

  console.log("From the server:", responseData);
  form.reset();
}

form.addEventListener("submit", handleSubmit);

// getting all teams info form the database
function getTeams() {
  fetch("http://localhost:8080/premier_league")
    .then((response) => response.json())
    .then((data) => {
      // The 'response' is now available as 'data'
      console.log(data); // Access the response data here
    })
    .catch((error) => {
      console.error("Error fetching teams:", error);
    });
}

getTeams();
