document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, {
    indicators:false
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, {});
});
