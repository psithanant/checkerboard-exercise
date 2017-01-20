// Your JS goes here
document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  var body = document.querySelector('body');

  for (var i = 0; i < 108; i++) {
    var div = document.createElement('div');
    body.appendChild(div);
    if (i % 2 === 1) {
      div.style["background-color"] = "black";
    } else {
      div.style["background-color"] = "red";
    }
    div.style.width = "11.1%";
    div.style.float = "left";
    div.style.paddingBottom = '11.1%';
  }
});

// Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`
