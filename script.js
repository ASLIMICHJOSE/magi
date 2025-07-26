function toggleMenu() {
  document.getElementById("dropdownMenu").classList.toggle("active");
}

document.getElementById('searchBtn').onclick = function() {
  document.getElementById('searchModal').style.display = 'flex';
  document.querySelector('#searchModal input').focus();
};
document.getElementById('closeSearch').onclick = function() {
  document.getElementById('searchModal').style.display = 'none';
};
document.getElementById('searchModal').onclick = function(e) {
  if (e.target === this) this.style.display = 'none';
};


