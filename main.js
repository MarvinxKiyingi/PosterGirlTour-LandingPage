window.onload = function () {
  console.log('hello from me ');
  TypeAnimation();
};
const webPageName = ['WWW.ZARALARSSONOFFICIAL.COM'];
let i = 0;
let Speed;

function TypeAnimation() {
  let webPage = webPageName[i].split('');
  var typingLoop = function () {
    if (webPage.length > 0) {
      document.getElementById('ticketsLink').innerHTML += webPage.shift();
    } else {
      DeleteNow();
      return false;
    }
    Speed = setTimeout(typingLoop, 200);
  };
  typingLoop();
}
function DeleteNow() {
  let webPage = webPageName[i].split('');
  var loopDeleting = function () {
    if (webPage.length > 0) {
      webPage.pop();
      document.getElementById('ticketsLink').innerHTML = webPage.join('');
    } else {
      if (webPageName.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      TypeAnimation();
      return false;
    }
    Speed = setTimeout(loopDeleting, 200);
  };
  loopDeleting();
}
