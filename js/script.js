function tracker() {
  var a;
    a = parseFloat(document.getElementById("num1").value);
  var b ;
    b = parseFloat(document.getElementById("num2").value);
  var c
    c = parseFloat(document.getElementById("num3").value);
    if (a <= 0 || b<=0 || c<=0 || a+b <=c || b+c <=a || a+c <=b ) {
      output = "Cannot form a triangle"
    }  else if ( a == b && b==c && a==c ) {
       output = "Equilateral Triangle";
    } else if ((a === b) || (b === c) || ( a === c )) {
       output = "Isosceles Triangle";
    } else {
       output = "Scalene Triangle";
    }
  document.querySelector("#result").innerHTML = output;
//The function extracts the values from the html page and then  is converted directly to numbers. Then the first arguments is to check whether the value is more than zero or whther the sum of two values is greater then the third one and if yes the triangle type is determined through the other arguments.//
