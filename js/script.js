function tracker() {
  var x;
    x = document.getElementById("num1").value;
  var y ;
    y = document.getElementById("num2").value;
  var z;
    z = document.getElementById("num3").value;
  var array = [x, y, z];
    if ( x + y < z || y + z < x || x + z < y ) {
       alert("Cannot form a triangle")
    }
    if ( x == y && y==z ) {
       alert ("Equilateral")
    }
    if (x == y && y != z) {
       alert ("Isosceles")
    }
}
