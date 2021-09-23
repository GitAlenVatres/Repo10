// Only change code below this line
var myPet = {
	species: "dog",
	name: "Alex",
	legs: 4,
	friends: {"Ani", "Sam", " Joe"}
};
function myFunction (myObj) {
    return myObj;
}

// Only change code above this line

console.log(myFunction(myPet)); //Change this line
module.exports = { myPet, myFunction };
