// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

three(minus(eight()))


function zero(fn) {
  if(fn){
    return fn(0);
  } else {
    return 0;
  }
}
function one(fn) {
  if(fn){
    return fn(1);
  } else{
    return 1;
  }
}
function two(fn) {
  if(fn){
    return fn(2);
  } else {
    return 2;
  }
}
function three(fn) {
  if(fn){
    return fn(3);
  } else {
    return 3;
  }
}
function four(fn) {
  if(fn){
    return fn(4);
  } else {
    return 4;
  }
}
function five(fn) {
  if(fn){
    return fn(5);
  } else{
    return 5;
  }
}
function six(fn) {
  if(fn){
    return fn(6);
  } else {
    return 6;
  }
}
function seven(fn) {
  if(fn){
    return fn(7);
  } else{
    return 7;
  }
}
function eight(fn) {
  if(fn){
    return fn(8);
  } else {
    return 8;
  }
}
function nine(fn) {
  if(fn){
    return fn(9);
  } else {
    return 9;
  }
}

function plus(num1) {
  return function(num2){
    return num1 + num2;
  }
}
function minus(num1) {
  return function(num2){
    return num2 - num1;
  }
}
function times(num1) {
  return function(num2){
    return num1 * num2;
  }
}
function dividedBy(num1) {
  return function(num2){
    return num2/num1;
  }
}