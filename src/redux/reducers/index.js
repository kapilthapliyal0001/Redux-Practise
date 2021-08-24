import {initialState} from "../store";

// add items to the cart
// remove items from the cart
// set the user name

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //   state.cart.products.push(action.payload)
      // SUPER WRONG!!
      // a reducer is a pure function
      // YOU CANNOT MUTATE YOUR ARGUMENTS

      //   [
      //       {
      //           book: {},
      //           qty: 1
      //       }
      //   ]

      let bookInCart = state.cart.products.findIndex(
        (b) => b.book.id === action.payload.id
      );

      let newProducts = [...state.cart.products];
      if (bookInCart === -1) {
        newProducts.push({
          book: action.payload,
          qty: 1,
        });
      } else {
        newProducts[bookInCart].qty++;
      }

      return {
        // every time you return an object out of a case
        // you're managing the whole state
        ...state,
        cart: {
          ...state.cart,
          // the book to add is going to be the payload of the action
          // action.payload -> the book to add
          products: newProducts,
          // products: state.cart.products.concat(action.payload)
          // FORBIDDEN METHODS!!
          // push, pop, splice
        },
      };

    case "REMOVE_FROM_CART":
      let newProductsArray = [...state.cart.products];

      if (newProductsArray[action.payload].qty === 1) {
        newProductsArray = newProductsArray.filter(
          (b, i) => i !== action.payload
        );
      } else {
        newProductsArray[action.payload].qty--;
      }

      return {
        ...state,
        cart: {
          ...state.cart,
          // the payload in this action will be the index of the book to remove
          products: newProductsArray,
        },
      };

    case "SET_USERNAME":
      return {
        ...state,
        user: {
          ...state.user,
          firstName: action.payload,
        },
      };

    default:
      //   console.log('NOT RECOGNIZED ACTION!')
      return state;
  }
};

export default mainReducer;
