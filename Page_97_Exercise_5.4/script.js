// const tempTable = []
// const myArray [[], []]
const myTable = [];
let tempTable = [];
var i, j;
for(let j = 0; j < 2; j++){
    for(let i = 0; i < 10; i ++){
        tempTable[i] = i*2;
    }
    myTable[j] = tempTable;

}

for(let j = 0; j < 2; j ++){
    console.log(myTable[j], " ");
}
// cocnsole.table(myTable)