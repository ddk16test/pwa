// var param = location.search;
// document.getElementById("inputparam").value = param;
const searchParams = new URLSearchParams(window.location.search);
const ser = searchParams.get("ser"); 
if (ser !== undefined) {
  // for check
  document.getElementById("inputparam").value = ser;
}

function externalFunction() {
  const tags = {
    m: "kuroe"
  };
  if (ser !== undefined) {
    tags.ser = ser;
  }
  OneSignal.User.addTags(tags);
  console.log('I am sending information');
}