function toggleMenu() {
  document.getElementById("dropdownMenu").classList.toggle("active");
}
function toggleSearch() {
  const searchWrapper = document.querySelector('.search-wrapper');
  searchWrapper.classList.toggle('active');
}
toggleMenu();
toggleSearch();
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchInput = searchBar.querySelector('input[type="search"]');

let isOpen = false;

searchToggle.addEventListener('click', () => {
  if (!isOpen) {
    searchBar.classList.add('open');
    searchInput.focus();
    isOpen = true;
  } else {
    if (searchInput.value.trim() !== "") {
      searchBar.submit();
    } else {
      alert("Please enter a search term!");
    }
  }
});
