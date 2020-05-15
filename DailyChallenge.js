let pets = [
    {
      name: "Rex",
      age: 4,
      ownerId: 42
    },{
      name: "Spot",
      age: 7,
      ownerId: 132
    },{
      name: "Scooby",
      age: 3,
      ownerId: 546
    },{
      name: "Lucky",
      age: 1,
      ownerId: 42
    }
  ];
  let people = [
    {
      name: "Luke",
      id: 42
    },{
      name: "Shaggy",
      id: 546
    },{
      name: "Jade",
      id: 132
    }
  ];
 // Given the two arrays below, write a function that takes the two arrays as parameters and outputs an array of pets with ownerName as a property instead of the ownerId property.
  //pets{name, age, ownerId};
  //people{name, id};

function mapPet(pet){                         //runs the function with every element in pets running as pet
    function findPersonByID(owner){           //inside the main function run a second function
        return owner.id == pet.ownerId        //if the person id matches the pet id return the person
    }
    let owner = people.find(findPersonByID);  //find an person that meets the function
    return{                                   //return the pet, 
        name:pet.name,                        //pets name,, 
        age: pet.age,                         //pet age,
        owner: owner.name                     //and if the name matched, return the matching name
    } 
}

let detailedPets = pets.map(mapPet);          //creates a new array with the function mapPet
console.log(detailedPets);                    //output to console the new array
