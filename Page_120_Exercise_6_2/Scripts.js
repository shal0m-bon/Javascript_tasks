function myFunction(){
    const Description = ["Green", "Red", "Pink", "Blue", "Peach", "Yellow", "Grey", "Black", "SlateGrey", "aqua"];
    let Name = prompt("Enter your name please");
    let index = Math.random();
    index = index * 10;
    index = Math.floor(index);
    console.log(index)
    for(let i = 0; i < Description.length; i ++){
        if( i === index){
            console.log(`The name ${Name} is ${Description[i]} in color`)
        }
    }
}

myFunction()