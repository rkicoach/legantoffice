if (
  process.env.NODE_ENV === 'production' &&
  typeof window !== 'undefined' &&
  'serviceWorker' in navigator
) {
  // eslint-disable-next-line no-unused-vars
  navigator.serviceWorker.register('sw.js').then((reg) => {
    console.log('Service worker registered (0-0) ');
  }).catch((err) => {
    console.error('Error during service worker registration:', err);
  });
}
