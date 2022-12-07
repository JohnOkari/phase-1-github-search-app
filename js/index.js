const searchInput = document.getElementById("search-input");
const resultsList = document.getElementById("github-container");
const form = document.getElementById("github-form");

// Get the data from the Fetch API
fetch("https://api.github.com/search/users?q=octocat")
  .then((response) => response.json())
  .then((data) => {
    // Filter the data based on the search input
    const filteredData = data.filter((user) => {
      return user.name.toLowerCase().includes(searchInput.value.toLowerCase());
    });

    // Clear the previous results
    resultsList.innerHTML = "";

    // Add the filtered results to the page
    filteredData.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      resultsList.appendChild(li);
    });
  });

function userDisplay() {
  //working on the input form
  form.innerHTML = user.name;
  searchInput.appendChild(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    filteredData.name += parseInt(e.target.users.value, 10);
    
  });
}
