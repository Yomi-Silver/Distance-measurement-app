//document.getElementById('output').style.visibility = 'hidden'

document.getElementById("input").addEventListener("input", function (e) {
  //document.getElementById('output').style.visibility = 'visible'
  let input = e.target.value;
  document.getElementById("kmOutput").innerHTML = input / 1000;
  document.getElementById("feetOutput").innerHTML = input * 0.305;
  document.getElementById("mlOutput").innerHTML = input * 1609344;
});
