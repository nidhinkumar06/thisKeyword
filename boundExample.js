let person = {name: "Nidhin"};

const userDetail = function(a, b) {
  console.log(`Welcome ${this.name} it is ${new Date().toLocaleTimeString()} now. go to ${a} ${b}`);
}

var bound = userDetail.bind(person);
bound("sleep", "please");
// bound();