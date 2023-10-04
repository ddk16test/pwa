const url = window.location.href;
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
ser_strage = localStorage.getItem("ser");
if (ser_strage !== null) {
  document.getElementById("inputparam_strage").value = ser_strage;
} else {
  document.getElementById("inputparam_strage").value = "null";
}


let deferredPrompt;
const buttonInstall = document.getElementById("installButton");

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log('beforeinstallprompt event was fired.');
});

buttonInstall.addEventListener('click', async () => {
  // Hide the app provided install promotion
  hideInstallPromotion();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  // Optionally, send analytics event with outcome of user choice
  console.log('User response to the install prompt');
  // We've used the prompt, and can't use it again, throw it away
  deferredPrompt = null;
});

window.addEventListener('appinstalled', (event) => {
  console.log('ok', 'appinstalled', event);
  // deferredPrompt をクリアしてガベージコレクションを行えるようにする
  window.deferredPrompt = null;
});