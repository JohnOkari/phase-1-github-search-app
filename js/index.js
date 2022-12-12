const githubForm = document.getElementById('github-form');
const searchInput = document.getElementById('search-input');
const userList = document.getElementById('user-list');
const reposList = document.getElementById('repos-list');

githubForm.addEventListener('submit', e => {
  e.preventDefault();

  // Get the search query from the input field
  const searchQuery = searchInput.value;

  // Use the fetch API to search for users on GitHub
  fetch(`https://api.github.com/search/users?q=${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      // Clear the previous search results
      userList.innerHTML = '';

      // Loop through the search results and add each user to the user list
      data.items.forEach(item => {
        const li = document.createElement('li');
        // li.innerHTML = `<a href="${item.html_url}" target="_blank">${item.login}</a>`;
        li.innerHTML = item.login
        userList.appendChild(li);
      });
    });
});

// Listen for clicks on the user list and show the repositories for the selected user
userList.addEventListener('click', e => {
  // Clear the previous search results
  reposList.innerHTML = '';

  // Use the fetch API to search for repositories for the selected user
  fetch(`https://api.github.com/users/${e.target.innerText}/repos`)
    .then(response => response.json())
    .then(data => {
      // Loop through the search results and add each repository to the repos list
      data.forEach(repo => {
        const li = document.createElement('li');
        // li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
        li.innerHTML = repo.name
        reposList.appendChild(li);
      });
    });
});
