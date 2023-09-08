function externalFunction() {
  const tags = {
    m: "kuroe"
  };
  var ser_local = localStorage.getItem("ser");
  localStorage.removeItem("ser");
  if ((ser_local !== null) && (ser_local !== undefined)) {
    tags.ser = ser_local;
    document.getElementById("inputparam_send").value = ser_local;
  } else {
    document.getElementById("inputparam_send").value = "null";
  }
  OneSignal.User.addTags(tags);
  console.log('I am sending information');
}

const url = window.location.href
if (url !== null) {
  // for check
  document.getElementById("url").value = url;
} else {
  document.getElementById("url").value = "null";
}
const searchParams = new URLSearchParams(window.location.search);
const ser = searchParams.get("ser"); 
if (ser !== null) {
  // for check
  document.getElementById("inputparam").value = ser;
  localStorage.setItem("ser", ser);
} else {
  document.getElementById("inputparam").value = "null";
}


// 通知許可イベントリスナー
// 登録処理と同時にタグ送信するためsleep挟む必要あるか
function permisssionChangeListener(permission) {
  if (permission) {
    console.log("permission accepted.");
    externalFunction();
  }
}

function subscribeEventListener(evnet) {
  console.log("open subscribe prompt.");
  OneSignal.Notifications.addEventListener("permissionChange", permissionChangeListener);
}

OneSignal.Notifications.addEventListener("permissionPromptDisplay", subscribeEventListener);