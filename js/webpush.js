const searchParams = new URLSearchParams(window.location.search);
const ser_save = searchParams.get("ser"); 
if (ser_save !== null) {
    // for check
    console.log('save localstrage');
    localStorage.setItem("ser", ser_save);
}

window.OneSignalDeferred = window.OneSignalDeferred || [];
OneSignalDeferred.push(function(OneSignal) {
    // for debug
    OneSignal.Debug.setLogLevel("trace");
    OneSignal.init({
        appId: "705dab8a-f3d1-4837-9932-708d34189bd5",
    });
    OneSignal.Notifications.addEventListener("permissionChange", permissionChangeListener);
});

// 通知許可イベントリスナー
// 登録処理と同時にタグ送信するためsleep挟む必要あるか

function permissionChangeListener(permission) {
    console.log("change permission.");
    if (permission) {
        const tags = {
            m: "kuroe"
        };
        console.log("permission accepted.");
        var ser_send = localStorage.getItem("ser");
        localStorage.removeItem("ser");
        if ((ser_send !== null) && (ser_send !== undefined)) {
            tags.ser = ser_send;
        }
        OneSignal.User.addTags(tags);
        console.log('I am sending information');
    }
}
  
function subscribeEventListener(evnet) {
    console.log("open subscribe prompt.");
    OneSignal.Notifications.addEventListener("permissionChange", permissionChangeListener);
}
