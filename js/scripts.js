// plik scripts.js
var a;
var h;
function getTriangleArea(a,h) {
  if (a < 0 || h < 0) {
    return 'Nieprawidlowe dane!';
  } else {
    return a * h/2;
  }
}
var triangleArea = getTriangleArea(a,h);
console.log('Pole trójk¹ta = ' + triangleArea)
console.log(getTriangleArea(10,6))
var triangle1Area = (getTriangleArea(10,8));
var triangle2Area = (getTriangleArea(12,8));
var triangle3Area = (getTriangleArea(10,12));
console.log('triangle1Area = ' + triangle1Area)
console.log('triangle2Area = ' + triangle2Area)
console.log('triangle3Area = ' + triangle3Area)