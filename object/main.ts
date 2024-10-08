import {ShoppingObject} from './ShoppingObject'


const shoppingObject: ShoppingObject = {
    id: 1,
    name: "test",
    price: 20,
    quantity: 2
};

console.log("List ");
console.log(shoppingObject);


//Access value
console.log("=====ACCESSSSING=====");
const name: string = shoppingObject.name;
console.log("FETCH_ name: " + name);



//Updated value
console.log("=====UPDATINGGG=====");

shoppingObject.name = "thirdy";
console.log("UPDATED_ now the object: " );
console.log(shoppingObject);



