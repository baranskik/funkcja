// plik scripts.js
var a = 5;
var h = 10;
if (a > 0) {
    console.log('a prawid這we');
}  else {
    console.log('nieprawid這we dane');
  }
if (h > 0) {
    console.log('h prawid這we');
}  else {
    console.log('nieprawid這we dane');
  }
if (a > 0 && h > 0) {
function getTriangleArea(a,h) {
  triangleArea = (a*h/2);
  return triangleArea;
}
var TriangleArea = getTriangleArea (a, h);
console.log('Pole tr鎩k靖a = ' + TriangleArea);
}
console.log(getTriangleArea(10,8))
var Triangle1Area = (getTriangleArea(10,8));
var Triangle2Area = (getTriangleArea(12,8));
var Triangle3Area = (getTriangleArea(10,12));
console.log('Triangle1Area = ' + Triangle1Area)
console.log('Triangle2Area = ' + Triangle2Area)
console.log('Triangle3Area = ' + Triangle3Area)
