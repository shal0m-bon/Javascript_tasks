const option = ['rock', 'paper', 'scissors'];
let i = prompt("Enter 0 for rock, 1 for paper or 2 for scissors");
switch(i){
    case i = 0:
        document.write("You entered: ", option[0])
        break;
    case i = 1:
        document.write("You entered: ", option[1])
        break;
    case i = 2:
        document.write("You entered: ", option[2])
        break;
    default:
        document.write("WROMG NUMBER.. refresh page and try again    ")
}
let comp = Math.random();
comp = comp *3;
comp = Math.floor(comp);
console.log(comp)
switch(comp){
    case 0:
        document.write("computer entered: ", option[0])
        break;
    case 1:
        document.write("computer entered: ", option[1])
        break;
    case 2:
        document.write("computer entered: ", option[2])
        break;
}
if(comp == 0 && i == 1){
    document.write("you win :) with ", option[1], "aginst ", option[0])
} else if(comp == 1 && i == 0){
    document.write("you Loose with ", option[1], " for the computer and ", option[0], " for you")
}else if(comp == 1 && i == 2){
    document.write("you win :) with ", option[2], "aginst ", option[1])
} else if(comp == 2 && i == 1){
    document.write("you Loose with ", option[1], " for the computer and ", option[2], " for you")
} else if(comp == 2 && i == 0){
    document.write("you win :) with ", option[0], "aginst ", option[1])
} else if(comp == 0 && i == 2){
    document.write("you Loose with", option[2], " for the computer and ", option[1], " for you")
} 
//else     
    // document.write('Same Choice... Refresh page and try again')