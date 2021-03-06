let long = 0;
let wide = 0;
let base = 0;
let height = 0;
let radius = 0;

function calculateRectangleArea(long, wide) {
  if (long > 0 && wide > 0) {
    let rectangleArea = (long * wide);
    return rectangleArea;
  }
}

function calculateTriangleArea(base, height) {
  if (base > 0 && height > 0) {
    let triangleArea = (base * height / 2);
    return triangleArea;
  }
}

function calculateCircleArea(radius) {
  if (radius > 0) {
    let circleArea = (Math.PI * radius * radius);
    return circleArea;
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined