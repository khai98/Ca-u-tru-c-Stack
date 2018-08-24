// Lop Stack
var Stack = function() {
    this.top = 0;
    this.dataStore = [];


    this.push = function (s) {
        this.dataStore[this.top++] = s;
    };


    this.peek  =  function () {
        return this.dataStore[this.top - 1];
    };


    this.pop  = function () {
        return this.dataStore[--this.top];
    };


    this.clear = function () {
        this.top = 0;
    };


    this.length = function () {
        return this.top;
    };

};


//doi tuong

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
document.write("length: " + s.length() + "</br>");
document.write(s.peek() + "</br>");


var popped = s.pop();
document.write("The popped element is: "  + "</br>" + popped ) ;
document.write(s.peek() + "</br>");


s.push("Cynthia");
document.write(s.peek() + "</br>");


s.clear();
document.write("length: " + s.length() + "</br>");
document.write(s.peek() + "</br>");


s.push("Clayton");
document.write(s.peek() + "</br>");