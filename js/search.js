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

const searchSymptoms = async (keyword) => {
  const symptomListDiv = document.getElementById("symptom-list");
  const list = document.createDocumentFragment();
  const url = "http://localhost:3000/symptoms";
  const config = {
    method: "post",
    body: JSON.stringify({
      symptomQuery: keyword,
    }),
  };
  const res = await fetch(url, config);
  const { symptomResult } = await res.json();
  symptomResult.map((eachSymptom) => {
    let dataButton = document.createElement("button");
    dataButton.className = "symptom-data";
    dataButton.innerHTML = `${eachSymptom}`;
    dataButton.onclick = () => {
      addTag(eachSymptom);
    };
    list.appendChild(dataButton);
  });
  symptomListDiv.appendChild(list);
};
searchForm.addEventListener("submit", handleSymptomSubmit);
