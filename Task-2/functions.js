function addition(a, b, c = 0, d = 0) {
    return a + b + c + d;
  }
  
  function subtraction(a, b, c = 0, d = 0) {
    return a - b - c - d;
  }
  
  function multiplication(a, b, c = 1, d = 1) {
    return a * b * c * d;
  }
  
  function division(a, b, c = 1, d = 1) {
    return a / b / c / d;
  }
  
  console.log(addition(2, 3));
  console.log(subtraction(10, 4, 2));
  console.log(multiplication(3, 4, 2));
  console.log(division(12, 3));   
  