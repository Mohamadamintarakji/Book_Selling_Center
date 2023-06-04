import AppNavbar from "../secrions/AppNavbar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import React, { useRef } from "react";
import axios from "axios";
import Loading from "../Loading";
import Alert from "../Alert";
const ProDetailes = () => {
  const { loadingPro } = useSelector((state) => state.products);
  const { toCart } = useAppContext();
  const params = useParams();
  const [product, setValue] = useState("");
  const [list_Size, set_List_Size] = useState("");
  const [list_Color, set_List_Color] = useState("");
  const [Qnt, set_Qnt] = useState("");
  const [Cart, setCart] = useState("");
  const [alert, setAlert] = useState(false);
  const x = useRef(true);

  useEffect(() => {
    if (x.current) {
      x.current = false;

      (async () => {
        const res = await axios.get(`/productDetailes/${params.id}`);
        setValue(res.data.product);
      })();
    }
  }, [params.id]);
  const setSize = (e) => {
    if (e === "0") set_List_Size("");
    else {
      set_List_Size({
        ...list_Size,
        selectedSize: e,
      });
      setCart({
        productId: { ...product },
        ...Cart,
        quantity: 1,
        selectedSize: e,
      });
      setValue({ ...product, selectedSize: e, quantity: quantity });
    }
  };
  const setColor = (e) => {
    if (e === "0") set_List_Color("");
    else {
      set_List_Color({
        ...list_Color,

        selectedColor: e,
      });
      setCart({
        productId: { ...product },
        ...Cart,
        quantity: 1,
        selectedColor: e,
      });
      setValue({ ...product, selectedColor: e, quantity: quantity });
    }
  };
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    const qnt = quantity + 1;
    setQuantity(qnt);
    return qnt;
  };
  const decrease = () => {
    if (quantity > 1) {
      const qnt = quantity - 1;
      setQuantity(qnt);
      return qnt;
    }
  };
  console.log(product.categories);
  const setQnt = (e) => {
    set_Qnt({
      ...Qnt,

      qnt: e,
    });
    setCart({
      productId: { ...product },
      ...product,
      ...Cart,
      quantity: e,
    });
    setValue({ ...product, quantity: e });
  };
  const addHandle = async () => {
    if (list_Color && list_Size) {
      toCart(Cart, product);
    } else {
      setAlert(true);
    }
  };

  return (
    <>
      <AppNavbar />

      {loadingPro ? (
        <Loading />
      ) : (
        <>
          {alert && <Alert setAlert={setAlert} />}
          {product.image && (
            <div className="section">
              <div className="container">
                <div className="row">
                  <div
                    className={
                      product.image ? "col-md-5 col-md-push-2" : "col-md-5 "
                    }
                  >
                    <div id="product-main-img">
                      <div className="product-preview">
                        <img src={`/img/${product.image[0]}`} alt="" />
                      </div>
                    </div>
                  </div>
                  {product.image && (
                    <div className="col-md-2  col-md-pull-5">
                      <div id="product-imgs">
                        {product.image.map((img) => (
                          <div className="product-preview" key={Math.random()}>
                            <img src={`/img/${img}`} alt="" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="col-md-5">
                    <div className="product-details">
                      <h2 className="product-name">{product.name}</h2>
                      <div>
                        <div className="product-rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-o"></i>
                        </div>
                        <a className="review-link" href="#">
                          10 Review(s) | Add your review
                        </a>
                      </div>
                      <div>
                        <h3 className="product-price">
                          {product.price}${" "}
                          <del className="product-old-price">$990.00</del>
                        </h3>
                        <span className="product-available">In Stock</span>
                      </div>
                      <p>{product.description}</p>
                      <p>{product.sizeList}</p>

                      <div className="product-options">
                        <label>
                          Size
                          <select
                            className="input-select m-2"
                            onChange={(e) => setSize(e.target.value)}
                          >
                            <option value="0">select</option>

                            {product.sizeList.map((size) => (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label>
                          Color
                          <select
                            className="input-select m-2"
                            onChange={(e) => setColor(e.target.value)}
                          >
                            <option value="0">select</option>

                            {product.colorList.map((color) => (
                              <option key={color} value={color}>
                                {color}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>

                      <div className="add-to-cart">
                        <div className="qty-label">
                          Qty
                          <div className="input-number">
                            <input
                              id="qnt"
                              readOnly
                              type="number"
                              value={quantity}
                            />
                            <span
                              className="qty-up"
                              onClick={() => {
                                increment();
                                setQnt(increment());
                              }}
                            >
                              +
                            </span>
                            <span
                              className="qty-down"
                              onClick={() => {
                                decrease();

                                setQnt(decrease());
                              }}
                            >
                              -
                            </span>
                          </div>
                        </div>
                        <button className="add-to-cart-btn" onClick={addHandle}>
                          <i className="fa fa-shopping-cart"></i> add to cart
                        </button>
                      </div>

                      <ul className="product-btns">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart-o"></i> add to wishlist
                          </a>
                        </li>
                      </ul>

                      <ul className="product-links">
                        <li>Categories:</li>
                        {product.categories.map((category) => (
                          <li key={Math.random()}>
                            <a href="#">{category}</a>
                          </li>
                        ))}
                      </ul>

                      <ul className="product-links">
                        <li>Share:</li>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-envelope"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div id="product-tab">
                      <ul className="tab-nav">
                        <li className="active">
                          <a data-toggle="tab" href="#tab1">
                            Description
                          </a>
                        </li>
                      </ul>

                      <div className="tab-content">
                        <div id="tab1" className="tab-pane fade in active">
                          <div className="row">
                            <div className="col-md-12">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div id="tab2" className="tab-pane fade in">
                          <div className="row">
                            <div className="col-md-12">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProDetailes;
