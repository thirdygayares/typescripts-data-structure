var shoppingList = ["milk", "chocolate", "shampoo"];
// PRINT ALL LIST
//console.log("List: " + shoppingList);
//console.log("=====ADDING==========");
shoppingList.push("Safeguard");
//console.log("CREATE_ shopping list is now  " + shoppingList);
// FETCHING SPECIFIC INDEX
//console.log("=====FETCHING==========");
var firstItem = shoppingList[0];
var secondItem = shoppingList[1];
//console.log("First Item: " +  firstItem);
//console.log("Second Item: " + secondItem);
// UPDATING
//console.log("=====UPDATING==========");
shoppingList[1] = "strawberry";
//console.log("UPDATING_ shopping list is now " + shoppingList);
//REMOVING
console.log("======DELETING==========");
shoppingList.splice(2, 1); //Remove 1 item at index 2
console.log("DELETING_ shopping list is now " + shoppingList);
