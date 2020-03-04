var min = new Date().getFullYear(),
  max = min + 9,
  select = document.getElementById('selectElementId');

for (var i = min; i <= max; i++) {
  var opt = document.createElement('option');
  opt.value = i;
  opt.innerHTML = i;
  select.appendChild(opt);
}
