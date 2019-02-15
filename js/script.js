function tracker() {
  var a;
    a = document.getElementById("num1").value;
  var b ;
    b = document.getElementById("num2").value;
  var c
    c = document.getElementById("num3").value;
  var array = [a, b, c];
    if (a <= 0 || b<=0 || c<=0) {
      output = "Not valid"
    } else if ( ((a+ b) <=c) || ((b + c) <= a) || ((a + c) <= b) ) {
       output = "Cannot form a triangle";
    } else if ( a == b && b==c && a==c ) {
       output = "Equilateral Triangle";
    } else if ((a == b) || (b == c) || ( a == c )) {
       output = "Isosceles Triangle";
    } else if ( a!= b && b !=c && a != c) {
       output = "Scalene Triangle";
    }
  document.querySelector("#result").innerHTML = output;
}
