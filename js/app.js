const url = window.location.href
if (url !== null) {
  // for check
  document.getElementById("url").value = url;
} else {
  document.getElementById("url").value = "null";
}

const searchParams_app = new URLSearchParams(window.location.search);
const ser = searchParams_app.get("ser"); 
if (ser !== null) {
  // for check
  document.getElementById("inputparam_url").value = ser;
} else {
  document.getElementById("inputparam_url").value = "null";
}

var ser_strage;
localStorage.setItem("ser", ser_strage);
if (ser_strage !== null) {
  document.getElementById("inputparam_strage").value = ser_strage;
} else {
  document.getElementById("inputparam_strage").value = "null";
}
