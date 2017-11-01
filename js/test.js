window.addEventListener('keydown', (evt) => {
  switch (evt.key) {
    case 'Backspace':
      window.location = '/index.html';
      evt.preventDefault();
    default:
      console.log('you press soft key: ' + evt.key);
      break;
  }
});
