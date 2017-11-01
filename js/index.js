var firstItem = document.getElementById('first-item');
var secondItem = document.getElementById('second-item');
var previousItem = null;
var currentItem = null;

function startTesting() {
  var activity = new MozActivity({
    name: 'configure',
    data: {
      target: 'device',
      section: 'display'
    }
  });

  activity.onsuccess = function() {
    console.log('launch Settings success');
  };
  activity.onerror = function() {
    console.log('Could not launch Settings app');
  };
}

function getCurrentItem() {
  var flag = firstItem.classList.contains('highlight');
  if (flag) {
    previousItem = secondItem;
    return firstItem;
  } else {
    previousItem = firstItem;
    return secondItem;
  }
}

function changeItemColor() {
  currentItem = getCurrentItem();
  currentItem.classList.remove('highlight');
  currentItem.classList.add('white');
  previousItem.classList.add('highlight');
  previousItem.classList.remove('white');
}

window.addEventListener('load', () => {
  firstItem.classList.add('highlight');
  currentItem = firstItem;
});

window.addEventListener('keydown', (evt) => {
  console.log(evt);
  switch (evt.key) {
    case 'ArrowDown':
    case 'ArrowUp':
      changeItemColor();
      break;
    case 'Enter':
      currentItem = getCurrentItem();
      if (currentItem.id === "first-item") {
        startTesting();
      } else {
        window.location = '../elements/test.html';
      }
      break;
    default:
      console.log('you press soft key: ' + evt.key);
      break;
  }
});
