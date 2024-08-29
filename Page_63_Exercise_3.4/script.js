let myCar = {
    numberOfSeats : 4,
    PresentOfAc : true,
    make : 'Toyota',
    model : 'Belta'
};
var variable = 'color';
myCar['color'] = 'red';
console.log(myCar[variable]);
console.log(myCar)
var variable = 'ForSale';
myCar['ForSale'] = true;
console.log("is the car for sale? ", myCar[variable])