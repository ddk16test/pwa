const DB_NAME = "infoDevice";
const OBJECT_STORE_NAME = "infoDeviceStore";

function externalFunction() {
  const tags = {
    m: "kuroe"
  };
  //var ser_local = localStorage.getItem("ser");
  //localStorage.removeItem("ser");
  (async () => {
    const ser_local = await getValue("ser");
  })();
  if (ser_local !== null) {
    tags.ser = ser_local;
    document.getElementById("inputparam_send").value = ser_local;
  } else {
    document.getElementById("inputparam_send").value = "null";
  }
  OneSignal.User.addTags(tags);
  console.log('I am sending information');
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onsuccess = (event) => {
      resolve(event.target.result);
    }
    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

function saveValue(key, value) {
  return new Promise(async (resolve, reject) => {
    const db = await openDatabase();
    const transaction = db.transaction(OBJECT_STORE_NAME, "readwrite");
    const objectStore = transaction.objectStore(OBJECT_STORE_NAME);

    const request = objectStore.put(value, key);
    request.onsuccess = (event) => {
      resolve(event.target.result);
    }
    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

function getValue(key) {
  return new Promise(async (resolve, reject) => {
    const db = await openDatabase();
    const transaction = db.transaction(OBJECT_STORE_NAME, "readwrite");
    const objectStore = transaction.objectStore(OBJECT_STORE_NAME);

    const request = objectStore.get(key);
    request.onsuccess = (event) => {
      resolve(event.target.result);
    }
    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
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
  //localStorage.setItem("ser", ser);
  (async () => {
    await saveValue("ser", ser);
  })();
} else {
  document.getElementById("inputparam").value = "null";
}