function myFunction(a, b, opp = "+"){
    let ans
    switch(opp){
        case "-":
            ans = a - b;
            break;
        case "*":
            ans = a * b;
            break;
        case "/":
            ans = a / b;
            break;
        case "%":
            ans = a % b;
            break;
        default:
            ans = a + b;
    }
    console.log(`${a} ${opp} ${b} = ${ans}`)
}
myFunction(2, 3, "*")