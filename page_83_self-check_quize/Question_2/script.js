const q = 1;
switch (q) {
 case '1':
 answer = "one";
 case 1:
 answer = 1;
 break;
 //output printed "this is the one" because thre is no break to the second case.
 case 2:
 answer = "this is the one";
 break;
 default:
 answer = "not working";
}
console.log(answer);

