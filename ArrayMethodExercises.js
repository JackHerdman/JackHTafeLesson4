let pets = [
    {
      name: "Rex",
      age: 4,
      ownerName: "Luke"
    },{
      name: "Spot",
      age: 7,
      ownerName: "Jade"
    },{
      name: "Scooby",
      age: 3,
      ownerName: "Shaggy"
    },{
      name: "Lucky",
      age: 1,
      ownerName: "Luke"
    },{
      name: "Sadie",
      age: 3,
      ownerName: "Daniel"
    },{
      name: "Duke",
      age: 5,
      ownerName: "Sabine"
    }
  ];
//1. Use the Array.filter function to create an array of all the pets owned by Luke.
function lukesPets(pets){
      pets.ownerName == "Luke";
}

let listLukesPets = pets.filter(lukesPets);
console.log(listLukesPets)

//2. Use the Array.map function to create an array of all the names of the owners.
function getNames(pets){   
    return pets.ownerName;         
}
let names =pets.map(getNames);   
                                   
console.log (names);

//3. Use the Array.find function to retrieve the pet owned by Shaggy
function shaggysPet(pets){
    return pets.ownerName =="Shaggy";
}
let listPet = pets.find(shaggysPet);
console.log(listPet);

//4. Use the Array.filter function to create an array of all the pets that are less than 5 years old and that have either a pet or owner name that starts with "S"

function filterPets(pet){
    let lessThan5 = pet.age < 5;
    let hasS = pet.name[0] == "S" || pet.ownerName[0] == "S";
    return lessThan5 && hasS;
}
let filteredPets = pets.filter(filterPets);
console.log(filteredPets);
