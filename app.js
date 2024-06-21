document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchIcon = document.getElementById("searchIcon");
  const heartIcons = document.querySelectorAll(".heart");
  searchInput.addEventListener("focus", function () {
    searchIcon.style.display = "none";
  });

  searchInput.addEventListener("blur", function () {
    if (searchInput.value === "") {
      searchIcon.style.display = "inline";
    }
  });

  heartIcons.forEach((heartIcon) => {
    heartIcon.addEventListener("click", () => {
      const pathAttribute = heartIcon.querySelector("path");
      if (pathAttribute.getAttribute("fill") === "#000000") {
        pathAttribute.setAttribute("fill", "#FF0000");
      } else {
        pathAttribute.setAttribute("fill", "#000000");
      }
    });
  });
});
