function externalFunction() {
    const tags = { 
        ser: "123",
        m: "kuroe"
      };
    OneSignal.User.addTags(tags);
    console.log('I am sending information');
}

var param = location.search;
document.getElementById("inputparam").value = param;