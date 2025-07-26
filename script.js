function toggleMenu() {
  var menu = document.getElementById("dropdownMenu");
  if (menu) {
    menu.classList.toggle("active");
  }
}

var searchBtn = document.getElementById('searchBtn');
var searchModal = document.getElementById('searchModal');
var closeSearch = document.getElementById('closeSearch');

if (searchBtn && searchModal) {
  searchBtn.onclick = function() {
    searchModal.style.display = 'flex';
    var input = searchModal.querySelector('input');
    if (input) input.focus();
  };
}

if (closeSearch && searchModal) {
  closeSearch.onclick = function() {
    searchModal.style.display = 'none';
  };
}

if (searchModal) {
  searchModal.onclick = function(e) {
    if (e.target === this) this.style.display = 'none';
  };
}


