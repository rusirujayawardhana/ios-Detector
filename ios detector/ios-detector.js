$(document).ready(function() {
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  var isMacOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  var isiOS = /(iPad|iPhone|iPod)/g.test(navigator.platform);

  if (isSafari && (isMacOS || isiOS)) {
    $('body').addClass('safari-mac-ios');// add your classes
  }
});

