async function searchOnChange(evt) {
  let searchQuery = evt.target.value;

  if (searchQuery !== "") {
    const searchButtonEle = document.querySelectorAll("#search");
    let searchButtonPosition;
    if (window.innerWidth > 768) {
      searchButtonPosition = searchButtonEle[0].getBoundingClientRect();
      document.getElementById("search-content").style.width = "500px";
    } else {
      searchButtonPosition = searchButtonEle[1].getBoundingClientRect();
      document.getElementById("search-content").style.width = "300px";
    }

    document.getElementById("search-content").style.top =
      searchButtonPosition.top + 50 + "px";
    document.getElementById("search-content").style.left =
      searchButtonPosition.left + "px";

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
    document.getElementById("search-content").style.display = "block";
  } else {
    document.getElementById("search-content").style.display = "none";
    document.getElementById("search-results").innerHTML = "";
  }
}
