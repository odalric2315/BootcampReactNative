console.log("Tugas No 1");
const golden = () => {
    console.log("this is golden!!")
}
golden();
console.log("\n");

console.log("Tugas No 2");
const newFunction = (firstName, lastName) => {
    firstName
    lastName
    return {
        fullName() {
            return console.log(firstName + " " + lastName)
        }
    }
}
newFunction("William", "Imoh").fullName();
console.log("\n");

console.log("Tugas No 3");
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell } = newObject;
console.log(firstName, lastName, destination, occupation)
console.log("\n");

console.log("Tugas No 4");
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

let combinedArray = [...west, ...east];
console.log(combinedArray)
console.log("\n");

console.log("Tugas No 5");
const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
console.log(before);