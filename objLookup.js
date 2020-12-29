// declare an object set to variable 
var myObject = {
  property1: "Hello",
  property2: "World"
}

// declare a 2nd object set to variable 
var secondObject = {
  prop1: "Second Hello",
  prop2: "Second World"
}

// build a function to lookup an object and property
function objLookup(obj, prop) {
  // console.log the object propery value
  console.log(obj[prop])
  // return the object property value
  return obj[prop]
}
// call the function objLookup with an object and the property we are looking for 
objLookup(myObject, "property1")
// call the function objLookup again with an object and the property we are looking for 
objLookup(myObject, "property2")
// call the function objLookup again with an object and the property we are looking for 
objLookup(secondObject, "prop1")
// call the function objLookup again with an object and the property we are looking for 
objLookup(secondObject, "prop2")
