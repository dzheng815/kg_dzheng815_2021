// prompt for user array
var numbers = prompt("Please enter number");
// split up the array 
var array = numbers.split(" ")
// creating enum value fro each possible value
var stringArray = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];

console.log(...array);
for(var i = 0; i < array.length; i++){
num = array[i];
var str = "";
//split num into digits
while(num > 0){
var mod = (num % 10);
str = stringArray[mod]+str;
num = Math.floor((num /10));
}
  
array[i] = str;

}

console.log(...array);