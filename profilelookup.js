// Setup
let contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop){
// Only change code below this line
  for(let i = 0; i < contacts.length; i ++) {
    console.log(contacts[i].firstName)
    console.log(contacts[i][prop])
    // check to see if the name passed into the function is valid
    if (contacts[i].firstName === name) {
      // check to see if the prop passed into the function is valid
      if (contacts[i].hasOwnProperty(prop)) {
        // return the value of prop
        return contacts[i][prop]
      }
      else {
        return "No such property"
      }
    }
  }
  return "No such contact"
// Only change code above this line
}

lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "lastName")
lookUpProfile("Sherlock", "likes")
lookUpProfile("Harry", "likes")
lookUpProfile("Bob", "number")
lookUpProfile("Bob", "potato")
lookUpProfile("Akira", "address")