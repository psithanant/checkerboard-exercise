// Your JS goes here
function getColor(i) {
  if (i % 2 === 1) {
    return 'rgb(255, ' + i*2 + ', 255)';
  }else{
    return 'rgb(' + i + ',' + i + ', 100)';
  }
//     ('rgb(111,111,23)')
}

document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  var body = document.querySelector('body');
  for (var i = 0; i < 108; i++) {
    var div = document.createElement('div');
    body.appendChild(div);
    div.style["background-color"] = getColor(i);
    div.style.width = "11.1%";
    div.style.float = "left";
    div.style.paddingBottom = '11.1%';
  }
});

// Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`
