//1.Create a function that takes 3 parameters called floor, ceiling and num. All 3 parameters should be numbers. Return true if num is between floor and ceiling. Otherwise return false
function inBetween(num, floor, ceiling){
    if(num > floor && num < ceiling || num < floor && num > ceiling){
    return true;
}else{
    return false;
}
}
let doesItFit = inBetween(30, 10, 20);
console.log(`Does it fit? ${doesItFit}`);

//2. Create a function that takes 1 parameter that is an object with 2 properties, name and age. Return true if the person's age is greater than 30 or their name contains the letter x (case insensitive). Otherwise return false.

let person1 = {name: "Jack", age: 29};
let person2 = {name: "Xavier", age: 25};
let person3 = {name: "Bob", age: 40};


function findX(character){
    if(character.atLowerCase() == "x"){
        return true;
    }else {
        return false;
    }
}

function checkNameAndAge(person){
    let containsX = !!person.name.find(findX);
    if(containsX || person.age > 30){
        return true;
    }else{
        return false;
    }
}

let runCheck = checkNameAndAge(person1);
console.log(`no "for loop" with ${person1}: ${runCheck}`)

function checkNameAndAge(person){
    let isOver30 = person.age > 30;
    let foundX = false;
    for (let i = 0; i < person.name.length; i++) {
        let letter = person.name[i].toLowerCase();
        if(letter == "x"){
            return true;
        }else{
            return false;
        }  
    }
if(isOver30 || foundX){
    return true;
}else{
    return false;
}
}

console.log(`${person1.name} is: ${checkNameAndAge(person1)}`);
console.log(`${person2.name} is: ${checkNameAndAge(person2)}`);
console.log(`${person3.name} is: ${checkNameAndAge(person3)}`);



//3. Create a function that takes 3 parameters. The first should be an object with two properties name and age. The second should be a number, the third should be a string. The function should return true if the age of the object is equal to the second parameter and the name is not equal to the third parameter. Otherwise return false.

function myFunction(person, age, name){
    let equalAge = age == person.age;        //if the age of the object is equal to the second parameter
    let notEqualName = name != person.name;     // if the name of the object is Not equal to the third par
    
    if(equalAge && notEqualName){
        return true;
    }else{
        return false;
    }
}

console.log(`${person1.name} is: ${myFunction(person1)}`)
console.log(`${person2.name} is: ${myFunction(person2)}`)
console.log(`${person3.name} is: ${myFunction(person3)}`)
