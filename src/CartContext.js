import { createContext, useState } from 'react';
import { productsArra, getProductData } from './productsStore';

const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

function CartProvider({ childrens }) {
  const [cartProducts, setCartProducts] = useState([]);

  //   cart stores {id: 1, quantity: 2}
  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map(
          // if condition
          (product) =>
            product.id === id
              ? // if statement is true
                { ...product, quantity: product.quantity + 1 }
              : // if statement is false
                product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          // if condition
          (product) =>
            product.id === id
              ? // if statement is true
                { ...product, quantity: product.quantity - 1 }
              : // if statement is false
                product
        )
      );
    }
  }

  function deleteFromCart(id) {
    //  [] if object meets condition add object to array
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
export default CartProvider;
// CODE DOWN HERE
// Context (cart, addToCart, removeCart)
// Prodvider gives your react app access to all things in your context
