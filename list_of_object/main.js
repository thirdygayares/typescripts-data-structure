"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main = function () {
    var shoppingList = [];
    shoppingList.push({ id: 1, name: "test", price: 100, quantity: 5 });
    shoppingList.push({ id: 2, name: "second", price: 100, quantity: 5 });
    console.log("List ");
    console.log(shoppingList);
    var readMyCart = function (id) {
        return shoppingList.find(function (p) { return p.id === id; }); // find should work if ES2020 is correctly targeted
    };
    console.log("-------Reading--------");
    console.log("Read:  ");
    console.log(readMyCart(1));
};
main();
exports.default = main;
