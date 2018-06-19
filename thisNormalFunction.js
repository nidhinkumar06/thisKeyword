//Case 1:Caling this inside a function
function soil () {
   // console.log(this);
}
soil();

//Case 1: Output Will return the window Object
//-----------------------------------------------

//Case 2: Calling this with a variable inside a function implicitly
this.bird = "sparrow";

function displayBird () {
    console.log(`Bird is ${this.bird}`);
}

displayBird();

// Case 2: Output will return output as undefined
//-----------------------------------------------

//Case 3: Calling this with an object inside a function implicitly 
let raguRoom = {
    pai: 'available',
    cleanRoom() {
        console.log(`Cleaning ${this.pai}`);
    }
}

raguRoom.cleanRoom();

// Case 3 : output will return the object
//---------------------------------------

//Case 4 : Explict calling

var person = {
    fullName: function() {
        console.log(`firstName: ${this.firstName}, LastName: ${this.lastName}`);
    }
}

var personOne = {
    firstName: 'Nidhin',
    lastName: 'Kumar'
}

person.fullName.call(personOne);

//case 4: Output During Implicit call the value passed from the call method
//------------------------------------------------------------------------------