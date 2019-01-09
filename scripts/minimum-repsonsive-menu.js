document.getElementById('minimum-toggle').onclick = function() {
  var minimum = document.getElementById('minimum-items');

  // Show and hide menu items when toggle is clicked
  if(minimum.style.display==='none') {
    minimum.style.display = 'flex';
  }
  else {
    minimum.style.display = 'none';
  }
};