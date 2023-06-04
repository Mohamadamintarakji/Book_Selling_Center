import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = ({ filteredProduct }) => {
  const { products } = useSelector((state) => state.products);
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="title">New Products</h3>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                {filteredProduct(products).map(
                  (product) =>
                    product.elementState === true && (
                      <div className="col-md-3" key={product._id}>
                        <div className="products-tabs">
                          <div id="tab1" className="tab-pane active">
                            <div
                              className="products-slick"
                              data-nav="#slick-nav-1"
                            >
                              <div className="product">
                                <Link to={`/productDetailes/${product._id}`}>
                                  <div className="product-img">
                                    <img
                                      src={`/img/${product.image[0]}`}
                                      alt=""
                                    />

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
                                    <del className="product-old-price">
                                      $990.00
                                    </del>
                                  </h4>

                                  <div className="product-btns">
                                    <button className="quick-view">
                                      <Link
                                        to={`/productDetailes/${product._id}`}
                                      >
                                        <i className="fa fa-eye"></i>
                                        <span className="tooltipp">
                                          quick view
                                        </span>
                                      </Link>
                                    </button>
                                  </div>
                                </div>
                                <div className="add-to-cart">
                                  <button className="add-to-cart-btn">
                                    <i className="fa fa-shopping-cart"></i>
                                    <Link
                                      to={`/productDetailes/${product._id}`}
                                    >
                                      add to cart
                                    </Link>
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
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
