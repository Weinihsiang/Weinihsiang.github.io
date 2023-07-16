
var button = document.getElementById("websiteButton");
var list = document.getElementById("websiteList");

button.addEventListener("click", function() {
      if (list.style.display === "none") {
        list.style.display = "block";
      } 
      else {
        list.style.display = "none";
      }
    });
function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("w3-show");
}

