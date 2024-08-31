let MySelection = prompt("Choose a number from 0 to 10: ");
// let MySelection = 5;
switch(MySelection){
    case 0:
        var ans = "Sorry! no discounts avilable";
        break;
    case 1:
        var ans = "you get an extra sweet for being our costomer";
        break;
    case 2:
        var ans = "We'll like to have you again.. maybe then you'll have a gift :)";
        break;
    case 3:
       var  ans = "Hurrey! you won a 10% discount";
        break;
    case 4:
        var ans = "You get a free coupon.. try your luck";
        break;
    case 5:
        var ans = "You get a free launch at our restaurant";
        break;
    case 6:
        var ans = "No gifts avilable";
        break;
    case 7:
        var ans = "10% discount ehen next you come";
        break;
    case 8:
        var ans = "thank youfor being our costomer :)";
        break;
    case 9:
        var ans = "See you latter ";
        break;
    case 10:
        var ans = "Your bill is handled";
        break;
    default :
        ans = "Number not recognised";
        break;
}
console.log("You entered: ", MySelection, ",  ", document.getElementsByName(ans))