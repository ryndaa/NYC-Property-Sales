document.getElementById('actionSelect').addEventListener('change', function() {
  var selectedValue = this.value;
  var divs = document.getElementsByClassName('toggleDiv');

  // Hide all divs
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = 'none';
}

// Show the selected div if it's not 'none'
if (selectedValue !== 'none') {
    document.getElementById(selectedValue).style.display = 'grid';
}
});