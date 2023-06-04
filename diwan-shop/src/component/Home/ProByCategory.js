import { useSelector } from "react-redux";
import AppNavbar from "../secrions/AppNavbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import React from "react";

function Home() {
  const { products } = useSelector((state) => state.products);
  const params = useParams();

  const selectedCategory = products.filter(
    (el) => el.categories[0] === params.name
  );
  useEffect(() => {
    (async () => {
      await axios.get(`/category/${params.name}`);
    })();
  }, [params.name]);
  return (
    <>
      <AppNavbar />

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {selectedCategory.map((product) => (
                  <div className="col-md-3" key={product._id}>
                    <div className="products-tabs">
                      <div id="tab1" className="tab-pane active">
                        <div className="products-slick" data-nav="#slick-nav-1">
                          <div className="product">
                            <Link to={`/productDetailes/${product._id}`}>
                              <div className="product-img">
                                <img src={`/img/${product.image[0]}`} alt="" />

                                <div className="product-label">
                                  <span className="sale">-30%</span>
                                  <span className="new">NEW</span>
                                </div>
                              </div>
                            </Link>
                            <div className="product-body">
                              <p className="product-category">Category</p>
                              <h3 className="product-name">
                                <a href="#"> {product.name}</a>
                              </h3>
                              <h4 className="product-price">
                                {product.price}
                                <del className="product-old-price">$990.00</del>
                              </h4>

                              <div className="product-btns">
                                <button className="add-to-wishlist">
                                  <i className="fa fa-heart-o"></i>
                                  <span className="tooltipp">
                                    add to wishlist
                                  </span>
                                </button>

                                <button className="quick-view">
                                  <Link to={`/productDetailes/${product._id}`}>
                                    <i className="fa fa-eye"></i>
                                    <span className="tooltipp">quick view</span>
                                  </Link>
                                </button>
                              </div>
                            </div>
                            <div className="add-to-cart">
                              <button className="add-to-cart-btn">
                                <i className="fa fa-shopping-cart"></i> add to
                                cart
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          id="slick-nav-1"
                          className="products-slick-nav"
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
