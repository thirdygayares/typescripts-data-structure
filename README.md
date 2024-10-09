1. Array
    
2. Objects
    
3. List Of Objects
    

Note: Ensure you have typescript globally

`npm install -g typescript`

**How to run?**

Example:

`tsc array.ts`

`node array.js`

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728386841844/c6563964-e943-40c6-bb58-e52cc0a84b78.png)

---

# Arrays in TypeScript

An **array** is a data structure that stores a collection of elements (values), usually of the same type, in a single variable. Arrays allow you to store multiple values in an ordered list and provide easy access using an index.

In **TypeScript**, arrays can be declared to hold specific types, ensuring type safety. You can store a list of strings, numbers, or any other data types.

### Defining an Array in TypeScript

Here's how you can define an array in TypeScript:

1. **Array of Numbers**:
    
    ```plaintext
    let numbers: number[] = [1, 2, 3, 4, 5];
    ```
    
2. **Array of Strings**:
    
    ```plaintext
    let shoppingList: string[] = ["milk", "bread", "eggs"];
    ```
    
3. **Array of Multiple Types (using** `any`):
    
    ```plaintext
    let mixedArray: any[] = [1, "apple", true];
    ```
    
4. **Using Generics** (Another way to define arrays):
    
    ```plaintext
    let fruits: Array<string> = ["apple", "banana", "orange"];
    ```
    
    **EXAMPLE: SHOPPINGLIST**
    
    ```plaintext
    let shoppingList: string[] = ["milk", "chocolate" , "shampoo"];
    
    console.log("List: " + shoppingList);
    ```
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728387113986/8dc84f52-5f2c-4a92-92f0-d276567ca0ad.png)

## Basic Operations on Arrays (CRUD) in TypeScript

### **Create (Insert)**: Adding new items to an array can be done using the `push()` method:

```plaintext
shoppingList.push("Safeguard");
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728388187400/284c79f1-81c7-40e9-a082-fee002fe04d5.png)

### Accessing Array Elements

You can access elements in an array using their index. The index starts at `0`.

`plaintext let firstItem = shoppingList[0]; let secondItem = shoppingList[1];`

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728387593925/f9d15d25-172e-4552-ba75-e68402780995.png)

### **Update**: You can modify existing elements by directly accessing them via their index:

```plaintext
shoppingList[1] = "strawberry";
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728388677542/9a16c067-8d00-42b8-8bda-b88591bbf3ce.png)

### **Delete**: You can remove elements using `splice()`:

```plaintext
shoppingList.splice(2, 1);  // Removes 1 item at index 2
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728388963844/4445298b-4c75-45e7-aa01-79590a345e9d.png)

This is how you use and manipulate arrays in TypeScript for basic operations like creating, reading, updating, and deleting elements.

---

# OBJECT

An object in TypeScript is **an instance that contains a set of key-value pairs**. These pairs can hold various data types, including scalar values, functions, or even arrays of other objects. ([GEEKSFORGEEKS](https://www.geeksforgeeks.org/typescript-object/#:~:text=An%20object%20in%20TypeScript%20is,even%20arrays%20of%20other%20objects.))

### **SAMPLE OBJECT**

`shoppingObject.ts`

```typescript
export interface ShoppingObject{
id: number;
name: string;
price: number;
quantity: number;
}
```

## **SAMPLE OPERATION IN OBJECT**

### **CREATE DATA IN OBJECT**

`main.ts`

```typescript
const shoppingObject: ShoppingObject = {
    id: 1,
    name: "test",
    price: 20,
    quantity: 2
};

console.log("List ");
console.log(shoppingObject);
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728443810593/61310ca6-d3ee-431d-a396-94ee33d2dc90.png)

### **ACCESS SPECIFIC VALUE**

`main.ts`

```typescript
//Access value
console.log("=====ACCESSSSING=====");
const name: string = shoppingObject.name;
console.log("FETCH_ name: " + name);
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728445394633/433644d7-ca16-466d-bc1b-3aa3c835c93c.png)

### **UDPATING SPECIFIC VALUE**

`main.ts`

```typescript
console.log("=====UPDATINGGG=====");

shoppingObject.name = "thirdy";
console.log("UPDATED_ now the object: " );
console.log(shoppingObject);
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728445637707/368b575e-9861-44df-ae7e-0982dad45f73.png)

---

# Array of Objects

Defining interfaces or type, we will provide the property names and their types inside them and assign them as a explicit type the array. ([https://www.geeksforgeeks.org/how-can-i-define-an-array-of-objects-in-typescript/#using-the-inbuilt-interfaces-and-type](https://www.geeksforgeeks.org/how-can-i-define-an-array-of-objects-in-typescript/#using-the-inbuilt-interfaces-and-type))

sample Array of Object

`ShoppingListObj.ts`

```typescript
export interface ShoppingListObj{
  id: number,
  name: string,
  price: number,
  quantity: number
}
```

### 1\. Create Operation

This function adds a new product to the `products` array.

`main.ts`

```plaintext
const shoppingList: ShoppingListObj[] = [];

shoppingList.push({id: 1, name: "test", price: 100, quantity: 5});
shoppingList.push({id: 2, name: "second", price: 100, quantity: 5});

console.log("List ");
console.log(shoppingList);
```

#### Explanation:

* **Parameter**: It accepts a parameter `shoppingList` of type `ShoppingListObj`. This represents the new list you want to add.
    
* **Operation**: The shopping or cart is added to the `shoppingList` array using the `push()` method.
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728446986251/4982c29f-4978-412c-ba0c-14670d97f1d7.png)
    

---

### 2\. **Read Product**

This function fetches a shoppingList by its `id`.

```plaintext
 const readMyCart = (id: number): ShoppingListObj | undefined => {
       return shoppingList.find(p => p.id === id);
 };
```

#### Explanation:

* **Parameter**: The function accepts `productId` which is the ID of the product to search for.
    
* **Operation**: It uses `find()` to search through the `products` array for the product with the matching `id`.
    
* **Conditional Logging**:
    
    * If the product is found, it logs "Product found" and returns the product.
        
    * If not found, it logs "Product not found" and returns `undefined`.
        

### Example of usage:

```plaintext
readProduct(1);  // Tries to find the product with id = 1
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728447997956/ba475cba-7353-475c-908d-362396a1be86.png)

This will search for the product with ID `1`. If it exists, the product will be logged and returned.

---

### 3\. **updateProduct** (Update Operation)

This function updates the fields of a product using its `id`.

```plaintext
const updateMyCart = (id: number, updatedData: Partial<ShoppingListObj>) => {
        const findIndex = shoppingList.findIndex(p => p.id === id);
        if (findIndex > -1) {
            shoppingList[findIndex] = { ...shoppingList[findIndex],  ...updatedData };
            console.log("UPDATED DATA: ");
            console.log(updatedData);
            console.log("UPDATED LIST: ");
            console.log(shoppingList);
        } else {
            console.log("Product Not Found");
        }
   };
```

#### Explanation:

* **Parameters**:
    
    * `id`: The ID of the product to be updated.
        
    * `updatedData`: A `Partial<ShoppingListObj>`, meaning it allows you to pass only the fields you want to update, without needing to provide the whole product.
        
* **Operation**:
    
    * The function uses `findIndex()` to locate the product in the `products` array by its `id`.
        
    * If the product is found, it updates the fields by using object spread (`...`) to merge the existing product data with the new `updatedData`.
        

### Example of usage:

```plaintext
updateMyCart(2, {name: "shampoo"});
```

This will update the product with ID `2` by setting its `name` to `shampoo`

**OUTPUT:**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728461019032/72e4f4a1-516b-4030-b821-f72db49b1bb9.png)

---

### 4.Delete Operation

This function deletes a product by its `id`.

```plaintext
 const deleteItem = (id: number) => {
        const findIndex = shoppingList.findIndex(p => p.id = id);
        if (findIndex !== -1){
            const deleteItem = shoppingList.splice(id, 1);
            console.log("Deleted Item: " + deleteItem[0]);
            console.log("UPDATED LIST: ");
            console.log(shoppingList);
        }
 }
```

#### Explanation:

* **Parameter**: It accepts `productId`, the ID of the product to be deleted.
    
* **Operation**:
    
    * It uses `findIndex()` to locate the product in the `products` array.
        
    * If the product is found, it is removed using `splice()` (which removes the product at the found index).
        
    * The deleted product is then logged.
        
    
    ### Example of usage:
    

```plaintext
deleteItem(1);  // Deletes the product with id = 1
```

This will remove the product with ID `1` from the `shoppingList` array if it exists.

`OUTPUT`

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728465480233/bafb3e41-40ec-40c5-8b17-b8755a84c6eb.png)

---

### AGAIN

* **Create**: Adds a new product to the list.
    
* **Read**: Retrieves a product by its ID.
    
* **Update**: Modifies specific fields of a product.
    
* **Delete**: Removes a product by its ID.
    

Each function uses basic array methods (`push`, `find`, `findIndex`, `splice`) to manipulate the `products` array and logs the results for clarity.

**GITHUB REPOSITORY:**

[https://github.com/thirdygayares/typescripts-data-structure.git](https://github.com/thirdygayares/typescripts-data-structure.git)
