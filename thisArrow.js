//Case 1: this in arrow function
const arrowExample = () => {
    console.log(this);
}

arrowExample();

//Case 1 Output: will return empty {} if this doesn't have value
//----------------------------------------------------------------

//Case 2: this declared globally and tried to access it in arrow function

this.fruit = "Mango";

const fruitExample = () => {
    console.log(this);
}

fruitExample();

//Case 2 Output: will return an object {fruit: 'Mango'}
//--------------------------------------------------------

//Case 3 : Adding new object as params while calling the function

this.flower = "rose";

const flowerExample = () => {
    console.log(this);
}

flowerExample(this.color = "red");

//Case 3 Output will be as { fruit: 'Mango', flower: 'rose', color: 'red' }