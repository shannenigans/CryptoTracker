var cssMain = document.head.querySelector('link[href*="/css/main.css"]');
var cssLoaded = cssMain ? cssMain.sheet.cssRules.length : false;
cssMain.addEventListener('load', function () {
  cssLoaded = true;
  console.log("Css Loaded: " + cssLoaded)
});