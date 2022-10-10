const searchForm = document.querySelector("#search-form");
const searchInput = searchForm.querySelector("input");
const symptomSelect = document.querySelector("#search-type");

function handleSymptomSubmit(event) {
  event.preventDefault();
  const inputValue = searchInput.value;
  const selectValue = symptomSelect.value;
  location.href = `search-symptom.html?key=${inputValue}&type=${selectValue}`;

  //   const config = {
  //     method: "get",
  //   };

  //   fetch("https://jsonplaceholder.typicode.com/users/1", config)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
}

searchForm.addEventListener("submit", handleSymptomSubmit);
