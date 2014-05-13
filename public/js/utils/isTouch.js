var KIS = KIS || {};

var isTouch = function () {
  return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
};

KIS.isTouch = isTouch;