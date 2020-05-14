//Not Operator - !
// takes a false statement and makes it true, and a true statement and make it false.
if(true){ // true so inside if
    console.log("I'm inside the if statement");
} else {
    console.log("I'm inside the else statement")
}

if(!true){ //false so inside else
    console.log("I'm inside the if statement");
} else {
    console.log("I'm inside the else statement")
}

//Or Operator - ||
//if at least one is true the whole statement is true
let a = true || true;       //true
let b = false || true;      //true
let c = true || false;      //true
let d = false || false;     //false because nothing is true here
console.log(`${a}, ${b}, ${c}, ${d}.`)

let person = {
    name: "Jack",
    age: 23
}
if(person.name[0] == "D" || person.age > 20){
    console.log("true")
} 

// AND Operator &&
//if both are true the whole statement is true, otherwise its false
let e = true && true;       //true
let f = false && true;      //false
let g = true && false;      //false
let h = false && false;     //false because nothing is true here
console.log(`${e}, ${f}, ${g}, ${h}.`)

if(person.name[0] == "J" || person.age > 18){
    console.log("false")
} 