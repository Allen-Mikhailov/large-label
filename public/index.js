// const label = document.getElementById("label")

// let infocus = false

label.onclick = (e) => {

    // infocus = !infocus
    // if (infocus)
    // {
    //     label.focus()
    // } else {
    //     label.blur()
    // }
}

function makeExpandingArea(container) {
    var area = container.querySelector('textarea');
    var span = container.querySelector('span');
    if (area.addEventListener) {
      area.addEventListener('input', function() {
        span.textContent = area.value;
      }, false);
      span.textContent = area.value;
    } else if (area.attachEvent) {
      // IE8 compatibility
      area.attachEvent('onpropertychange', function() {
        span.innerText = area.value;
      });
      span.innerText = area.value;
    }
   // Enable extra CSS
   container.className += " active";
   }var areas = document.querySelectorAll('.expandingArea');
   var l = areas.length;while (l--) {
    makeExpandingArea(areas[l]);
   }