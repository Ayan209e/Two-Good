import {
  ADD_CARD_TO_CART,
  ADD_TO_CART,
  CART_TOTAL_AMOUNT,
  REMOVE_FROM_CART,
  SET_IS_LOGGED_IN,
  SET_STORE_DATA,
  SET_USER_EMAIL,
  TOGGLE_NAVBAR_MENU_LIST,
  TOGGLE_OVERLAY,
  TOGGLE_SHOW_DONATION_MENU,
} from "./action.types";

export const setStoreData = (data) => ({
  type: SET_STORE_DATA,
  payload: data,
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: SET_IS_LOGGED_IN,
  payload: isLoggedIn,
});

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  payload: email,
});

export const toggleOverlay = (val) => ({
  type: TOGGLE_OVERLAY,
  payload: val,
});

export const toggleNavbarMenuList = (val) => ({
  type: TOGGLE_NAVBAR_MENU_LIST,
  payload: val,
});

export const toggleShowDonationMenu = (val) => ({
  type: TOGGLE_SHOW_DONATION_MENU,
  payload: val,
});

export const addProductToCart = (product) => (dispatch, getState) => {
  const { cartStore } = getState();
  if (!cartStore) {
    console.error("Cart is undefined");
    return;
  }
  const existingProduct = cartStore.products.find((p) => p.id === product.id);
  let updatedCart;
  if (existingProduct) {
    updatedCart = cartStore.products.map((p) =>
      p.id === product.id
        ? { ...p, quantity: p.quantity + product.quantity }
        : p
    );
  } else {
    updatedCart = [
      ...cartStore.products,
      { ...product, quantity: product.quantity },
    ];
  }
  dispatch({
    type: ADD_TO_CART,
    payload: updatedCart,
  });
  dispatch(setCartTotalAmount());
};

export const removeProductFromCart = (productId) => (dispatch, getState) => {
  const { cartStore } = getState();
  if (!cartStore) {
    console.error("Cart is undefined");
    return;
  }
  const updatedCart = cartStore.products.filter(
    (product) => product.id !== productId
  );
  dispatch({
    type: REMOVE_FROM_CART,
    payload: updatedCart,
  });
  dispatch(setCartTotalAmount());
};

export const setCartTotalAmount = () => (dispatch, getState) => {
  const { cartStore } = getState();
  if (!cartStore) {
    console.error("Cart is undefined");
    return;
  }

  const price = cartStore.products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  dispatch({
    type: CART_TOTAL_AMOUNT,
    payload: price,
  });
};

export const updateProductQuantity =
  (productId, quantity) => (dispatch, getState) => {
    const { cartStore } = getState();
    if (!cartStore) {
      console.error("Cart is undefined");
      return;
    }
    const updatedCart = cartStore.products.map((product) =>
      product.id === productId ? { ...product, quantity } : product
    );
    dispatch({
      type: ADD_TO_CART,
      payload: updatedCart,
    });
    dispatch(setCartTotalAmount());
  };

export const addGiftCard = () => (dispatch, getState) => {
  const { cartStore } = getState();
  if (!cartStore) {
    console.error("Cart is undefined");
    return;
  }
  dispatch({
    type: ADD_CARD_TO_CART,
    payload: cartStore.cards + 1,
  });
};

export const removeGiftCard = () => (dispatch, getState) => {
  const { cartStore } = getState();
  if (!cartStore) {
    console.error("Cart is undefined");
    return;
  }
  dispatch({
    type: ADD_CARD_TO_CART,
    payload: 0,
  });
};
