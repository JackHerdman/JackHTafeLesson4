//Callback Functions are  Functionception, A function inside a function
let people = [
    {
        name: "Abe",
        message: "Good day to you Sir!"
    },{
        name: "Jeff",
        message: "mynamesJeeffff"
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
