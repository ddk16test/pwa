const DB_NAME = "infoDevice";
const OBJECT_STORE_NAME = "infoDeviceStore";

function saveValue(dict_save) {
  var idbreq = indexedDB.open(DB_NAME, 1);
  idbreq.onupgradeneeded = function (event) {
    var db = event.target.result;
    var dbStore = db.createObjectStore(OBJECT_STORE_NAME, {keyPath: "ser"});

    dbStore.add(dict_save);
  }
}
/*
function getValue() {
  var idbreq = indexedDB.open(DB_NAME, 1);

  idbreq.onsuccess = function (event) {
    var db = idbreq.result;

    var transaction = db.transaction(OBJECT_STORE_NAME, "readonly");
    var dbStore = transaction.objectStore(OBJECT_STORE_NAME);

    dbStore.openCursor().onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {
        console.log("id:" + cursor.key + " ser: " + cursor.value.ser);
        ser_global = cursor.value.ser;       
        cursor.continue();
      }
    }
  }
}
*/
function externalFunction() {
  const tags = {
    m: "kuroe"
  };
  var idbreq = indexedDB.open(DB_NAME, 1);

  idbreq.onsuccess = function (event) {
    var db = idbreq.result;

    var transaction = db.transaction(OBJECT_STORE_NAME, "readwrite");
    var dbStore = transaction.objectStore(OBJECT_STORE_NAME);

    dbStore.openCursor().onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {
        console.log("id:" + cursor.key + " ser: " + cursor.value.ser);

        if ((cursor.value.ser !== null) && (cursor.value.ser !== undefined)) {
          tags.ser = cursor.value.ser;
          document.getElementById("inputparam_send").value = cursor.value.ser;
          tags.ser = cursor.value.ser;
        } else {
          document.getElementById("inputparam_send").value = "null";
        }
        OneSignal.User.addTags(tags);
        console.log('I am sending information');
        cursor.continue();
      }
    }
  }


}

/*
function openDatabase() {
  return new Promise(async (resolve, reject) => {
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
*/
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
  const dict_ser = {};
  dict_ser["ser"] = ser;
  saveValue(dict_ser);
  //localStorage.setItem("ser", ser);
  /*
  (async () => {
    await saveValue("ser", ser);
  })();
  */
} else {
  document.getElementById("inputparam").value = "null";
}

  //const tags = Object.assign(pretags, dict_info);
  /*
  var ser_local = localStorage.getItem("ser");
  localStorage.removeItem("ser");
  */
  /*
  (async () => {
    const ser_local = await getValue("ser");
  })();
  */