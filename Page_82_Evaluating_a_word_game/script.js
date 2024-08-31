let numbers = [5,7,3,9, 0,0,4,6];
let num = prompt("Enter a number: ");
for(var i =  0; i < numbers.length; i++){
    if(num < numbers[i]){
        console.log("The number you enterred is less than ", numbers[i]);
    } else if(num > numbers[i]){
        console.log("The number you enterred is greater than ", numbers[i]);
    } else if(num = numbers[i]){
        console.log("The number you enterred is equal to ", numbers[i]);
    }
}