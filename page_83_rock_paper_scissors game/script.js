const option = ['rock', 'paper', 'scissors'];
let userinput = prompt("Enter 0 for rock, 1 for paper or 2 for scissors");
if(userinput <= 2){
    if(userinput == 0){
            document.write(" You entered: ", option[0], ",\n")
    }
    if(userinput == 1){
            document.write(" You entered: ", option[1], ",\n")        
    }
    if(userinput == 2){
            document.write(" You entered: ", option[2], ",\n")
    }

    let comp = Math.random();
    comp = comp *3;
    comp = Math.floor(comp);
    console.log(comp)
    switch(comp){
        case 0:
            var compFinal = 0;
            document.write(" computer entered: ", option[0], ",\n")
            break;
        case 1:
            var compFinal = 1;
            document.write(" computer entered: ", option[1], ",\n")
            break;
        case 2:
            var compFinal = 2;
            document.write(" computer entered: ", option[2], ",\n")
            break;
    }


    if(compFinal == 0 && userinput == 1){
        document.write("   you win :) ")
    } else if(compFinal == 1 && userinput == 0){
        document.write("   you Loose ")
    }else if(compFinal == 1 && userinput == 2){
        document.write("   you win :) ")
    } else if(compFinal == 2 && userinput == 1){
        document.write("   you Loose ")
    } else if(compFinal == 2 && userinput == 0){
        document.write("   you win :) ")
    } else if(compFinal == 0 && userinput == 2){
        document.write("   you Loose ")
    } 
    else     
        document.write(' Same Choice...\n Refresh page and try again ')
} else{
    document.write("WRONG NUMBER... Refrsh page and try again")
}
