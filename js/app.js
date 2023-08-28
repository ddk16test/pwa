function externalFunction() {
    const tags = { 
        ser: "123",
        m: "kuroe"
      };
    OneSignal.User.addTags(tags);
    console.log('I am running!');
}