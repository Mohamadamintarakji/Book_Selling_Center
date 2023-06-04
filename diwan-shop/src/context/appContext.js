import { useDispatch, useSelector } from "react-redux";
import React, { useContext, useState, useRef } from "react";
import { useEffect } from "react";
import {
  GET_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  SET_UPDATE_PRODUCT,
  SET_ADD_PRODUCT,
} from ".././rtk/slices/productsSlice";
import {
  GET_CATEGORIES,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  ADD_CATEGORY,
  SET_ADD_CATEGORY,
  SET_UPDATE_CATEGORY,
} from ".././rtk/slices/categoriesSlice";

import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SETUP_USER_SUCCESS,
  REGISTER_SUCCESS,
  SET_USER_lOGOUT,
  VERIFY_MAIL,
  GET_USER,
  RESET_PASS,
} from "../rtk/slices/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  GET_COLORS,
  UPDATE_COLOR,
  ADD_COLOR,
  DELETE_COLOR,
  SET_UPDATE_COLOR,
  SET_ADD_COLOR,
} from ".././rtk/slices/colorsSlice";
import {
  GET_SIZES,
  UPDATE_SIZE,
  DELETE_SIZE,
  ADD_SIZE,
  SET_UPDATE_SIZE,
  SET_ADD_SIZE,
} from ".././rtk/slices/sizesSlice";
import {
  addToCart,
  GET_CART,
  deleteCart,
  deleteUserCart,
  clearCart,
} from ".././rtk/slices/cartSlice";
import { ADD_ORDER, clearOrders } from ".././rtk/slices/ordersSlice";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState(false);

  const url = window.location.pathname;

  const { added, cart, deleted } = useSelector((state) => state.cart);
  const { updateProId } = useSelector((state) => state.products);
  const { updateCatId } = useSelector((state) => state.categories);
  const { updateColorId } = useSelector((state) => state.colors);
  const { updateSizeId } = useSelector((state) => state.sizes);

  const clearAlert = () => {
    setTimeout(() => dispatch(CLEAR_ALERT()), 2000);
  };

  const displayAlert = (msg) => {
    dispatch(DISPLAY_ALERT({ alertText: msg }));
    clearAlert();
  };

  const login = async (e, data) => {
    e.preventDefault();

    try {
      const res = await axios.post("/login", data);
      dispatch(SETUP_USER_SUCCESS({ user: res.data.user }));
      clearAlert();
      getCart();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (e) {
      displayAlert(e.response.data.msg);
      console.log(e.response.data.msg);
    }
  };
  const resetPassword = async (e, data) => {
    e.preventDefault();

    try {
      const res = await axios.post("/reset-password", data);
      console.log(res.data.user.resetToken);
      dispatch(RESET_PASS(res.data.user));
      navigate("/");
    } catch (e) {
      console.log(e.response.data.msg);
    }
  };

  const updatePassword = async (e, data) => {
    e.preventDefault();

    try {
      await axios.post("/updatePassword", data);
      navigate("/");
    } catch (e) {
      console.log(e.response.data.msg);
    }
  };
  const verifyRegister = async (e, data) => {
    e.preventDefault();
    console.log(data);
    try {
      const res = await axios.post("/register", data);
      dispatch(VERIFY_MAIL({ user: res.data.user }));
      clearAlert();

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (e) {
      displayAlert(e.response.data.msg);
      console.log(e.response.data.msg);
    }
  };

  const register = async (e, data) => {
    e.preventDefault();

    try {
      const res = await axios.post("/verify-register", data);
      dispatch(REGISTER_SUCCESS({ user: res.data.user }));
      clearAlert();

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (e) {
      displayAlert(e.response.data.msg);
      console.log(e.response.data.msg);
    }
  };
  const handleLogOut = async () => {
    window.location.reload();

    await axios.post(`/logout`);
    dispatch(SET_USER_lOGOUT());
  };

  const addProduct = async (e, data) => {
    e.preventDefault();

    try {
      const res = await axios.post("/dashboard/MangeProducts", data);
      dispatch(ADD_PRODUCT([res.data.product]));
      setForm(false);
    } catch (e) {
      console.log(e.response.data.msg);
    }
  };

  const addItem = async (e, data) => {
    console.log(data);
    e.preventDefault();

    try {
      if (url.includes("/MangeProducts")) {
        const res = await axios.post("/dashboard/MangeProducts", data);
        dispatch(ADD_PRODUCT([res.data.product]));
        setForm(false);
      }
      if (url.includes("/MangeCategories")) {
        const res = await axios.post("/dashboard/MangeCategories", data);
        dispatch(ADD_CATEGORY([res.data.category]));
        setForm(false);
      }

      if (url.includes("/MangeSizes")) {
        const res = await axios.post("/dashboard/MangeSizes", data);
        dispatch(ADD_SIZE([res.data.size]));
        setForm(false);
      }

      if (url.includes("/MangeColors")) {
        const res = await axios.post("/dashboard/MangeColors", data);
        dispatch(ADD_COLOR([res.data.color]));
        setForm(false);
      }
    } catch (e) {
      console.log(e.response);
    }
  };
  const getProducts = async () => {
    const res = await axios.get("/dashboard/MangeProducts");
    console.log(res.data);
    dispatch(GET_PRODUCTS(res.data.products));
  };

  const getCategories = async () => {
    const res = await axios.get("/dashboard/MangeCategories");
    dispatch(GET_CATEGORIES(res.data.categories));
  };
  const getSizes = async () => {
    const res = await axios.get("/dashboard/MangeSizes");
    dispatch(GET_SIZES(res.data.sizes));
  };

  const getColors = async () => {
    const res = await axios.get("/dashboard/MangeColors");
    dispatch(GET_COLORS(res.data.colors));
  };

  const getCart = async () => {
    try {
      const res = await axios.get("/cart");
      const items = res.data.cart;
      let data = JSON.parse(localStorage.getItem("cart"));
      dispatch(GET_CART(items));

      if (data !== null) {
        toCart(...data, ...data);
        localStorage.removeItem("cart");
      }
    } catch (e) {
      let array = [];

      let data = JSON.parse(localStorage.getItem("cart"));
      console.log(data);

      if (data === null) {
        array = [];
      } else {
        array.push(...data);
      }
      dispatch(GET_CART(array));

      console.log(e);
    }
  };

  const toCart = async (item, product) => {
    console.log(product);
    item._id = product._id;

    const compare = item.productId._id + item.selectedColor + item.selectedSize;
    item.compare = compare;

    try {
      dispatch(addToCart(item));

      await axios.post("/cart", product);
    } catch (err) {
      let Cart = JSON.parse(localStorage.getItem("cart"));
      console.log(Cart);
      if (Cart === null || Cart === "" || Cart.length < 1) {
        Cart = [];
        Cart.push(item);

        localStorage.setItem("cart", JSON.stringify(Cart));
      } else {
        if (Cart.length > 0) {
          for (let i = 0; i < Cart.length; i++) {
            if (Cart[i].compare === compare) {
              localStorage.setItem("exist", true);
              Cart[i].quantity += 1;
            }
          }
          let exist = localStorage.getItem("exist");
          if (!exist) {
            Cart.push(item);
          }
          localStorage.setItem("cart", JSON.stringify(Cart));
        }
        localStorage.removeItem("exist");
      }

      console.log(err);
    }
  };
  const deleteFromCart = async (itemId) => {
    const compare =
      itemId.productId._id + itemId.selectedColor + itemId.selectedSize;
    try {
      console.log(itemId);
      dispatch(deleteUserCart(itemId));

      await axios.delete(`/cart/${itemId._id}`);
      setTimeout(() => {
        getCart();
      }, 1000);
    } catch (err) {
      dispatch(deleteCart(itemId));

      const newCart = cart.filter((product) => product.compare !== compare);
      localStorage.setItem("cart", JSON.stringify(newCart));

      console.log(err);
    }
  };

  const getUser = async () => {
    try {
      const { data } = await axios.get("/getUser");
      const { user } = data;
      dispatch(GET_USER({ user: user }));
    } catch (error) {
      if (error.response.status === 401) return;
    }
  };
  const getAllItems = async () => {
    const res = await axios.get("/home");
    dispatch(GET_PRODUCTS(res.data.products));
    dispatch(GET_CATEGORIES(res.data.categories));
    dispatch(GET_SIZES(res.data.sizes));
    dispatch(GET_COLORS(res.data.colors));

    getCart();
  };
  const setAdd = async () => {
    dispatch(SET_ADD_SIZE());
    dispatch(SET_ADD_COLOR());
    dispatch(SET_ADD_CATEGORY());
    dispatch(SET_ADD_PRODUCT());
    setForm(true);
  };

  const setUpdatePro = async (data) => {
    dispatch(SET_UPDATE_PRODUCT(data));
    setForm(true);
  };
  const setUpdateCat = async (data) => {
    dispatch(SET_UPDATE_CATEGORY(data));
    setForm(true);
  };
  const setUpdateSize = async (data) => {
    dispatch(SET_UPDATE_SIZE(data));
    setForm(true);
  };
  const setUpdateColor = async (data) => {
    dispatch(SET_UPDATE_COLOR(data));
    setForm(true);
  };
  const UpdateItem = async (e, data) => {
    if (e.type === "submit") e.preventDefault();
    setForm(false);

    try {
      if (url.includes("/MangeProducts")) {
        dispatch(UPDATE_PRODUCT(data));
        console.log(data);

        await axios.put(`/dashboard/MangeProducts/${data._id}`, data);
        getProducts();
        navigate("/dashboard/MangeProducts");
      }
      if (url.includes("/MangeCategories")) {
        dispatch(UPDATE_CATEGORY(data));
        await axios.put(`/dashboard/MangeCategories/${data._id}`, data);
        getCategories();
        navigate("/dashboard/MangeCategories");
      }
      if (url.includes("/MangeSizes")) {
        dispatch(UPDATE_SIZE(data));
        await axios.put(`/dashboard/MangeSizes/${data._id}`, data);
        getSizes();
        navigate("/dashboard/MangeSizes");
      }
      if (url.includes("/MangeColors")) {
        dispatch(UPDATE_COLOR(data));
        await axios.put(`/dashboard/MangeColors/${data._id}`, data);
        getColors();
        navigate("/dashboard/MangeColors");
      }
    } catch (e) {
      console.log(e.response);
    }
  };
  const deleteItem = async (id) => {
    try {
      if (url.includes("/MangeProducts")) {
        dispatch(DELETE_PRODUCT(id));
        await axios.delete(`/dashboard/MangeProducts/${id}`);
        getProducts();
      }
      if (url.includes("/MangeCategories")) {
        dispatch(DELETE_CATEGORY(id));
        await axios.delete(`/dashboard/MangeCategories/${id}`);
        getCategories();
      }
      if (url.includes("/MangeSizes")) {
        dispatch(DELETE_SIZE(id));
        await axios.delete(`/dashboard/MangeSizes/${id}`);
        getSizes();
      }
      if (url.includes("/MangeColors")) {
        dispatch(DELETE_COLOR(id));
        await axios.delete(`/dashboard/MangeColors/${id}`);
        getColors();
      }
    } catch (e) {
      console.log(e.response.data.msg);
    }
  };

  const Checkout = async (address) => {
    dispatch(ADD_ORDER(address));
    try {
      await axios.post("/create-order", address);
      dispatch(clearCart());
      dispatch(clearOrders());

      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const x = useRef(true);
  useEffect(() => {
    if (x.current) {
      x.current = false;
      getAllItems();
      getUser();
    }

    if (added) {
      setTimeout(() => {
        getCart();
      }, 1000);
    }
    if (deleted) {
      setTimeout(() => {
        getCart();
      }, 1000);
    }
  }, [added, deleted]);
  useEffect(() => {
    (async () => {
      await axios.get(`/dashboard/MangeProducts/${updateProId}`);
    })();
  }, [updateProId]);
  useEffect(() => {
    (async () => {
      await axios.get(`/dashboard/MangeSizes/${updateSizeId}`);
    })();
  }, [updateSizeId]);
  useEffect(() => {
    (async () => {
      await axios.get(`/dashboard/MangeCategories/${updateCatId}`);
    })();
  }, [updateCatId]);
  useEffect(() => {
    (async () => {
      await axios.get(`/dashboard/MangeColors/${updateColorId}`);
    })();
  }, [updateColorId]);
  return (
    <AppContext.Provider
      value={{
        register,
        verifyRegister,
        displayAlert,
        resetPassword,
        updatePassword,
        login,
        handleLogOut,
        getAllItems,
        deleteItem,
        UpdateItem,
        getCategories,
        toCart,
        getCart,
        setUpdatePro,
        setUpdateColor,
        setUpdateSize,
        setUpdateCat,
        deleteFromCart,
        Checkout,
        addProduct,
        addItem,
        setForm,
        setAdd,
        form,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider };
