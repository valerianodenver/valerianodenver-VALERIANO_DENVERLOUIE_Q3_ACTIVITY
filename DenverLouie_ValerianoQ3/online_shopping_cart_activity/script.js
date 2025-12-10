
//1 Create products array with 6 gadgets
let products = [
   { name: "Laptop", price: 35000, category: "Electronics"},
   { name: "Headphones", price: 1500, category: "Accessories"},
   { name: "Mouse", price: 500, category: "Accessories"},
   { name: "Phone", price: 2000, category: "Electronics"},
   { name: "USB Cable", price: 150, category: "Accessories"},
   { name: "Smart Watch", price: 5000, category: "Electronics"}
];
//2 Sort products by price ascending
products.sort(function(a,b){
   return a.price - b.price;
});
//3 Display all products with index,name,price,category:
products.forEach(function(product, index){
   console.log(index +":" + product.name + " - ₱" + 
    product.price + "(" + product.category + ")");
});
//4 Create empty cart array:
let cart = [];

//5 Write addToCart(productName) to add a product to cart by name:
function addToCart (productName) {
  let found = false;
  for(let i = 0; i < products.length; i++) {
    if(products [i].name === productName) {
        cart.push(products[i]);

        console.log(productName + "added  to cart!");
        found = true;
        break;
    }
}
 if (!found) {
    console.log("Product not found!");
   }
 }
 //6 Test adding 3 items:

  addToCart("Laptop");
  addToCart("Mouse");
  addToCart("Phone");

  console.log("Current cart:", cart);

  //Phase 2 Cart Operations
  //7 Remove last item with pop();

  function removeLastItem() {
    if (cart.length > 0) {
        let removed = cart.shift();
        console.log(removed.name + " removed from cart");
    } else {
        console.log("Cart is empty!");
    }
  }
//8 Remove first item with shift() 
  
function removeFirstItem() {
    if(cart.length > 0) {
        let removed = cart.shift();
        console.log(removed.name +" removed from cart");
    } else {
        console.log("Cart is Empty!");
    }
}

//9 Show cart contents with indices:

function showCart() {
    console.log("=== CART (" + cart.length + " items) ===");
    cart.forEach(function(item, index) {
      console.log(index + ": " + item.name + " -₱ " + item.price);
    });
}

//10 Calculate total price with reduce():

function getTotalPrice() {
    return cart.reduce(function(sum, item) {
        return sum + item.price;
  }, 0);
}


console.log("Total price: ₱" + getTotalPrice());

removeLastItem();
showCart();
console.log("Total price: ₱" + getTotalPrice());

//11 Filter cart to get only electronics:
 
function getElectronics() {
    return cart.filter(function(item){
        return item.category === "Electronics";
   });
}
console.log("Electronics in cart: ", getElectronics());

//12 Apply discount using map():
  function applyDiscount(cartItems, discountPercent) {
    return cartItems.map(function(item) {
        return {
            name: item.name,
            originalPrice: item.price * (1 - discountPercent / 100),
            discountedPrice: item.price * (1 - discountPercent / 100)
        };
    });
 }  
let discountedCart = applyDiscount(cart, 10);
console.log("Cart with 10% discount: ", discountedCart);

     //13 Chceckout applying discount if total> 20,000:
    function checkout() {
        let total = getTotalPrice();
        console.log("Original Total: ₱" + total);

        if(total > 20000) {
            let discounted = applyDiscount(cart, 10);
            let discountedTotal = discounted.reduce(function(sum, item) 

    {
                return sum + item.discountedPrice;
            }, 0);
            console.log("Discounted applied! New Total: ₱" + discountedTotal.toFixed(2));
    } else {
        console.log("Total: ₱" + total);
    }
    }
     checkout();

     //14 Remove item by name using splice:

     function removeItemByName(productName) {
        for(let i = 0; i < cart.length; i++) {
            if(cart[i].name === productName) {
                cart.splice(i, 1);
                console.log(productName + "removed!");
                return;
            }
        }
        console.log("Item not found in cart!");
    }

     // Test removal 
     addToCart("Headphones");
        removeItemByName("Mouse");
        showCart();

        // Phase 4: Final Simulation
        //15: Run full test:

        cart = []; // empty cart
        addToCart("Laptop");
        addToCart("Smart Watch");
        addToCart("USB Cable");
        addToCart("Headphones");

        showCart();
        checkout();

        removeItemByName("USB Cable");
        showCart();
    
