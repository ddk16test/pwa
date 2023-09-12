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
  document.getElementById("inputparam").value = ser;
  //localStorage.setItem("ser", ser);
} else {
  document.getElementById("inputparam").value = "null";
}