function SVGSymbol(elem){
  var symbol = new Symbol(project.importSVG(elem));
  // remove the svg in html, after taking it at here.
  elem.parentNode.removeChild(elem);
  return symbol;
}
var svgSymbol = SVGSymbol(document.getElementById('raindrop'));

// generate new svg objects
var n = 10;
while(n--){
  var p = svgSymbol.place();
  p.position = new Point(n * 40, 100);
  p.scale(0.25 + Math.random() * 0.75);
}
