//Callback Functions are  Functionception, A function inside a function
let people = [
    {
        name: "Abe",
        message: "Good day to you Sir!",
        heightInInches: 73
    },{
        name: "Jeff",
        message: "mynamesJeeffff",
        heightInInches: 65
    }
];

function myGreeter(people, callback){               //runs a function with 2 arguments
    for (let i = 0; i < people.length; i++) {       //cycle through all people in an array
        let person = people[i];                     //chooses the person
        let greeting = callback(person.message);    //chooses a greeting based on a different function
        console.log(`${greeting} ${person.name}`);  //displays the persons name and a greeting to them
    }
}

function myCallbackFunction(message){                       //the function to choose a greeting
    if (message == "mynamesJeeffff" || message == "Hello"){ //if the greeting is one of these...
        return "Hi"                                         //say hello to jeff
    } else {                                                //if not
        return "Good day to you too,";                      //say hello to Abe
    }
}
myGreeter(people, myCallbackFunction);        //run function myGreeter using people(array) and another function


//Array.filter
//takes one array, runs it through a true/false function. and makes a new array

function myFilterFunction(person){  //the filter function will check an element and return true or false
    if (person.name[0] =="J") {     //for every persons first name letter chekc if its J    
        return true;                //if its a J return true
    }else {
        return false;               //otherwise return false
    }
}
let filteredArray = people.filter(myFilterFunction); //when the function returns true. add element to new array

console.log(filteredArray)

//anonymous callback function - only used once
let newFilteredArray = people.filter(function (person){
    if (person.name[0] =="A") {     //for every persons first name letter chekc if its J    
        return true;                //if its a J return true
    }else {
        return false;               //otherwise return false
    }
})
console.log(newFilteredArray)

//Array.map

function getNames(person){      //perform the function on the array person
    return person.name;         //for person.name, return name for each element
}
let names =people.map(getNames);    //works like the 'for' statement that goes through each element
                                    //this will add the returned value to a new array
console.log (names);

function convertHeightToCm(person){
    return{
        name: person.name,                         //output is the same
        message: person.message,                    //output is the same
        heightInCm: person.heightInInches * 2.54     //output is changed
    }
}
let peopleCm = people.map(convertHeightToCm); // outputs each element with the change
console.log(people);
console.log(peopleCm);


//Array.find
//finds ONLY FIRST element in the array
let animal = [
    {
        name: "Melman",
        species: "Giraffe",
        heightInInches: 196
    },{
        name: "Marty",
        species: "Zebra",
        heightInInches: 60
    },{
        name: "Alex",
        species: "Lion",
        heightInInches: 47
    },{
        name: "Gloria",
        species: "Hippo",
        heightInInches: 60
    }
];

function findUnder65(animal){
    return animal.heightInInches > 65;
}
let newAnimal = animal.find(findUnder65);
console.log(newAnimal);
