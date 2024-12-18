export default function serviceWorkerDev() {
  let swUrl = `${process.env.PUBLIC_URL}/serviceWorker.js`;
  navigator.serviceWorker
    .register(swUrl)
    .then((response) => {
      console.warn('response', response);
    })
    .catch((error) => {
      console.error('Service Worker Registration Failed:', error);
    });
}
