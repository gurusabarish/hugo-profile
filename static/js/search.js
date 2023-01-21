async function searchOnChange(evt) {
  let searchQuery = evt.target.value;
  var inputEle = document.querySelectorAll("input#search");
  inputEle.forEach((element) => {
    element.value = searchQuery;
  });

  if (searchQuery !== "") {
    let searchJson = await fetch("/index.json").then((res) => res.json());
    let searchResults = searchJson.filter((item) => {
      let res = false;
      if (item.title && item.description && item.content) {
        res =
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (item.title && item.description) {
        res =
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (item.title && item.content) {
        res =
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (item.description && item.content) {
        res =
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (item.title) {
        res = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (item.description) {
        res = item.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      } else if (item.content) {
        res = item.content.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return res;
    });
    if (searchResults.length > 0) {
      let searchResultsHtml = "";
      searchResults.map((item) => {
        searchResultsHtml += `<div class="card">
                        <a href="${item.permalink}">
                            <div class="p-3">
                                <h5>${item.title}</h5>
                                <div>${item.description}</div>
                            </div>
                       </a>
                    </div>`;
      });
      document.getElementById("search-results").innerHTML = searchResultsHtml;
    } else {
      let searchResultsHtml = `<p class="text-center py-3">No results found for "${searchQuery}"</p>`;
      document.getElementById("search-results").innerHTML = searchResultsHtml;
    }
    alignSearchContent();
    document.getElementById("search-content").style.display = "block";
  } else {
    document.getElementById("search-content").style.display = "none";
    document.getElementById("search-results").innerHTML = "";
  }
}

function alignSearchContent() {
  const searchButtonEle = document.querySelectorAll("#search");
  if (searchButtonEle.value !== "") {
    let searchButtonPosition;
    if (window.innerWidth > 768) {
      searchButtonPosition = searchButtonEle[0].getBoundingClientRect();
      document.getElementById("search-content").style.width = "500px";
    } else {
      var navbarCollapse = document.querySelector("#navbarContent");
      navbarCollapse.classList.add("show");
      searchButtonPosition = searchButtonEle[1].getBoundingClientRect();
      document.getElementById("search-content").style.width = "300px";
    }

    document.getElementById("search-content").style.top =
      searchButtonPosition.top + 50 + "px";
    document.getElementById("search-content").style.left =
      searchButtonPosition.left + "px";
  }
}

function resetSearch(e) {
  if (
    e.keyCode === 27 ||
    (e.target.id !== "search" &&
      e.target.closest("section#search-content") === null)
  ) {
    if (document.getElementById("search-results").innerHTML !== "") {
      document.getElementById("search-content").style.display = "none";
      document.getElementById("search-results").innerHTML = "";
      var inputEle = document.querySelectorAll("input#search");
      inputEle.forEach((element) => {
        element.value = "";
        element.blur();
      });
    }
  }
}

document.onkeyup = function () {
  switch (event.keyCode) {
    // ESC
    case 27:
      resetSearch(event);
      break;

    // ctrl + k
    case 75:
      if (event.ctrlKey) {
        document.getElementById("search").focus();
      }
      break;
  }
};

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 75 && e.ctrlKey) {
    e.preventDefault();
  }
});

// Close search on click outside and on resize
document.addEventListener("click", function (e) {
  resetSearch(e);
});
window.addEventListener("resize", function (e) {
  alignSearchContent();
});
