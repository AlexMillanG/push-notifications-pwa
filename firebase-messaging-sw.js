importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");


// Configuración igual que en app.js
firebase.initializeApp({
  apiKey: "AIzaSyAD9q-RuwA1_Q7t1BDPrUMQS3SAbqXWSLk",
  authDomain: "login-9ce23.firebaseapp.com",
  projectId: "login-9ce23",
  storageBucket: "login-9ce23.firebasestorage.app",
  messagingSenderId: "565117217107",
  appId: "1:565117217107:web:ce24be169ab9a8b32b99a6"
});

const messaging = firebase.messaging();

// Evento cuando llega un mensaje en segundo plano
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Notificación";
  const options = {
    body: payload.notification?.body || "",
  };
  self.registration.showNotification(title, options);
});

// Manejar clics en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});