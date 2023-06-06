function createFunction() {
    var name = "Martin";
    function showName() {
      console.log(name);
    }
    return showName;
}
  
var myFunction = createFunction();
myFunction(); 