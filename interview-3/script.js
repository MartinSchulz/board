(function () {
  'use strict';

  // listen to the whole document...
  document.addEventListener('click', function (e) {
    // ...but handle only anchors
    if (e.target.nodeName !== 'A') return;

    e.preventDefault();

    window.open(e.target.href, '_blank');

    // we can not use :visited pseudo-class to add :before to the link,
    // so do it manually
    var CHECK_SIGN = '✓';
    var html = e.target.innerHTML;

    // do it only once
    if (html[0] !== CHECK_SIGN) {
      html = CHECK_SIGN + ' ' + html;
      e.target.innerHTML = html;
    }
  }, false);
}());