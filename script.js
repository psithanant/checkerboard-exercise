// Your JS goes here
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  var body = document.querySelector('body');
  for (var i = 0; i < 108; i++) {
    var div = document.createElement('div');
    body.appendChild(div);
    div.style["background-color"] = getRandomColor();
    div.style.width = "11.1%";
    div.style.float = "left";
    div.style.paddingBottom = '11.1%';
  }
  setInterval(function(){
    var divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
      divs[i].style["background-color"] = getRandomColor();
    }
  }, 2000);
});

// Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`
