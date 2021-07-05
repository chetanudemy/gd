const INI_STATE = {
  cart: 0,
  wishList: 0,
  wishItems: [],
  cartItems: [],
  cartAmount: 0,
};

const ShoppingReducer = (state = INI_STATE, action) => {
  switch (action.type) {
    case 'WISHLIST':
      return {
        ...state,
        wishList: state.wishList + action.qty,
        wishItems: state.wishItems.concat(action.item),
      };
    case 'CART':
      return {
        ...state,
        cart: state.cart + action.qty,
        cartItems: state.cartItems.concat(action.item),
      };
  }

  return state;
};

export default ShoppingReducer;
