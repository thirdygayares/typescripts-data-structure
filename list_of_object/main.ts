import {ShoppingListObj} from './ShoppingListObj';

const main = () => {
    const shoppingList: ShoppingListObj[] = [];

    shoppingList.push({id: 1, name: "test", price: 100, quantity: 5});
    shoppingList.push({id: 2, name: "second", price: 100, quantity: 5});

    console.log("List ");
    console.log(shoppingList);


   const readMyCart = (id: number): ShoppingListObj | undefined => {
       return shoppingList.find(p => p.id === id);
   };

   console.log("-------Reading--------");
   console.log("Read:  " );
   console.log(readMyCart(1));

   const updateMyCart = (id: number, updatedData: Partial<ShoppingListObj>) => {
        const findIndex = shoppingList.findIndex(p => p.id === id);
        if (findIndex !== -1) {
            shoppingList[findIndex] = { ...shoppingList[findIndex],  ...updatedData };
            console.log("UPDATED DATA: ");
            console.log(updatedData);
            console.log("UPDATED LIST: ");
            console.log(shoppingList);
        } else {
            console.log("Product Not Found");
        }
   };

   //UPDATING
    updateMyCart(2, {name: "shampoo"});


    const deleteItem = (id: number) => {
        const findIndex = shoppingList.findIndex(p => p.id = id);
        if (findIndex !== -1){
            const deleteItem = shoppingList.splice(id, 1);
            console.log("Deleted Item: " + deleteItem[0]);
            console.log("UPDATED LIST: ");
            console.log(shoppingList);
        }
    }

    //DELETE
    deleteItem(1);

}

main();

export default main;