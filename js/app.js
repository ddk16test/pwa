// var param = location.search;
// document.getElementById("inputparam").value = param;
const searchParams = new URLSearchParams(window.location.search);
const ser = searchParams.get("ser"); 
if (ser !== null) {
  // for check
  document.getElementById("inputparam").value = ser;
  localStorage.setItem("ser", ser);
} else {
  document.getElementById("inputparam").value = "null";
}

function externalFunction() {
  const tags = {
    m: "kuroe"
  };
  var ser_local = localStorage.getItem("ser");
  localStorage.removeItem("ser");
  if (ser_local !== null) {
    tags.ser = ser_local;

  }
  OneSignal.User.addTags(tags);
  console.log('I am sending information');
}