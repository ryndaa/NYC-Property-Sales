document.getElementById('actionSelect').addEventListener('change', function() {
  var selectedValue = this.value;
  var divs = document.getElementsByClassName('toggleDiv');

  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = 'none';
}

if (selectedValue !== 'none') {
    document.getElementById(selectedValue).style.display = 'grid';
}
});

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

if (getUrlParameter('showdiv1') === 'true') {
  document.getElementById('div1').style.display = 'grid';
}

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

if (getUrlParameter('showdiv2') === 'true') {
  document.getElementById('div2').style.display = 'grid';
}

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

if (getUrlParameter('showdiv3') === 'true') {
  document.getElementById('div3').style.display = 'grid';
}