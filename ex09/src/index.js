function myfunction(myObj,checkProp){

// Only change code below this line
 
  if(myObj.hasOwnProperty(checkProp)){
  return myObj[checkProp];
  }
   return "Not found";
   // Only change code above this line
}

myfunction({title:"Titanic", song:"My Heart Will Go On", genre:"drama"},"title");
myfunction({title:"Titanic", song:"My Heart Will Go On", genre:"drama"},"song");
myfunction({title:"Titanic", song:"My Heart Will Go On", genre:"drama"},"genre");
myfunction({title:"Titanic", song:"My Heart Will Go On", genre:"drama"},"actor");

module.exports=myFunction;