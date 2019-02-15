function tracker() {
  var x;
    x = document.getElementById("num1").value;
  var y ;
    y = document.getElementById("num2").value;
  var z;
    z = document.getElementById("num3").value;
  var array = [x, y, z];
    if (x <= 0 || y<=0 || z<=0) {
      output = "Not valid" ;
    }
    if ( x + y >= z || y + z >= x || x + z >= y ) {
       output = "Cannot form a triangle";
    }
     if ( x == y && y==z && x==z ) {
       output = "Equilateral Triangle";
    }
     if ((x == y) && (y!=z) ) {
       output = "Isosceles Triangle";
    if (x!=y && y!=z && x!=z) {
       output = "Scalene Triangle"
       }
    }
  document.querySelector("#result").innerHTML = output;
}
