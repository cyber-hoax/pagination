var number = document.getElementsByClassName("numbers");

var i;

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
     
  });
}

var icon = document.getElementsByClassName("icons");
icon.addEventListener("click", function () {
  console.log("hello");
});
