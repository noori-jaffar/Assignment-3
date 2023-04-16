(async function () {
    const response = await fetch("./movies.json");
    const movies = await response.json();
  
    const inputElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchBtn");
    const listElem = document.getElementById("movies-list");
    const detailsElem = document.getElementById("moviesDetailsContainer");
  
    function loadMoviesDetails(movies) {
      detailsElem.innerHTML = `
          <h2 class="title">${movies.title}</h2>
          <h3>Genre:</h3>
          <ul>${movies.genre.map(function (genre) {
            return "<li>" + genre + "</li>"
          }).join("")}</ul>
          <h3>Instruction:</h3>
          <div>${movies.instructions}</div>
      `;
    }
  
    function displaySearchResults (results) {
      listElem.innerHTML = "";
      results.forEach(function (movies) {
        const li = document.createElement("li");
        const listItem = `
            <h2 class="title">${movies.title}</h2>
            <div class="description">${movies.description}</div>
        `;
        li.innerHTML = listItem;
        li.addEventListener("click", function () {
          loadMoviesDetails(movies);
        });
        listElem.appendChild(li);
      })
    }
  
    function search() {
      const query = inputElem.value.toLowerCase();
      const results = movies.filter(function (recipe) {
        return (movies.title.toLowerCase().includes(query) ||
        recipe.genre.join(" ").toLowerCase().includes(query))
      });
  
      displaySearchResults(results);
    }
  
    btnElem.addEventListener("click", search);


   
 })();
