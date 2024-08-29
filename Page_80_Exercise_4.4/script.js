let rand = Math.random(); 
rand = rand * 5; 
rand = Math.floor(rand); 
let Question = prompt("Ask me anything...")
switch(rand){
    case 0:
        console.log("You sure will");
        break;
    case 1:
        console.log("Yes you will");
        break;
    case 2:
        console.log("not at all :(");
        break;
    case 3:
        console.log("I'll be glad to help however i can");
        break;
    case 4:
        console.log("I'm not so sure about that");
        break;
    case 5:
        console.log("I have no idea ");
        break;
}