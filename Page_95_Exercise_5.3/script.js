const myWork = new Array;
//or const myWork = [];

for(let i = 0; i < 10; i ++){
    let stat = (i % 2 === 0)? true: false;
    let lesson = {
        name : `lesson ${i+1}`,
        status : stat
    }
    myWork[i] = lesson;
}

for(let i = 0; i < 10; i ++){
    console.log(myWork[i])
}




