let MySelection = prompt("Choose a number from 0 to 10: ");
var ans;
switch(MySelection){
    case 0:
        ans = "Sorry! no discounts avilable";
        break;
    case 1:
        ans = "you get an extra sweet for being our costomer";
        break;
    case 2:
        ans = "We'll like to have you again.. maybe then you'll have a gift :)";
        break;
    case 3:
        ans = "Hurrey! you won a 10% discount";
        break;
    case 4:
        ans = "You get a free coupon.. try your luck";
        break;
    case 5:
        ans = "You get a free launch at our restaurant";
        break;
    case 6:
        ans = "No gifts avilable";
        break;
    case 7:
        ans = "10% discount ehen next you come";
        break;
    case 8:
        ans = "thank youfor being our costomer :)";
        break;
    case 9:
        ans = "See you latter ";
        break;
    case 10:
        ans = "Your bill is handled";
        break;
    // default :
    //     ans = "Number not recognised";
    //     break;
}
console.log("You entered: ", MySelection, ",  ", document.getElementsByName(ans))