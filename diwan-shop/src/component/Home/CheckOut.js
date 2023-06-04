import { useSelector } from "react-redux";
import AppNavbar from "../secrions/AppNavbar";
import Wrapper from "../../Wrapper/Home";
import { useAppContext } from "../../context/appContext";
import React, { useState } from "react";

function Home() {
  const { cart } = useSelector((state) => state.cart);

  const { Checkout } = useAppContext();
  const [address, setAddress] = useState({
    product: JSON.parse(localStorage.getItem("cart")) || cart,
    fName: "",
    lName: "",
    email: "",
    country: "",
    address: "",
    telefon: "",
    zipCode: "",
  });

  const total = cart.reduce(
    (previousScore, currentScore) =>
      (previousScore +=
        currentScore.quantity * parseInt(currentScore.productId.price)),
    0
  );
  return (
    <>
      <AppNavbar />
      <div id="breadcrumb" class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="breadcrumb-header">Checkout</h3>
              <ul class="breadcrumb-tree">
                <li>
                  <a href="#">Home</a>
                </li>
                <li class="active">Checkout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="billing-details">
                <div class="section-title">
                  <h3 class="title">Billing address</h3>
                </div>
                <div class="form-group">
                  <input
                    class="input"
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                    onChange={(e) =>
                      setAddress({ ...address, fName: e.target.value })
                    }
                  />
                </div>
                <div class="form-group">
                  <input
                    class="input"
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
                    onChange={(e) =>
                      setAddress({ ...address, lName: e.target.value })
                    }
                  />
                </div>
                <div class="form-group">
                  <input
                    class="input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setAddress({ ...address, email: e.target.value })
                    }
                  />
                </div>
                <div class="form-group">
                  <input
                    class="input"
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={(e) =>
                      setAddress({ ...address, address: e.target.value })
                    }
                  />
                </div>

                <div class="form-group">
                  <input
                    class="input"
                    type="text"
                    name="country"
                    placeholder="Country"
                    onChange={(e) =>
                      setAddress({ ...address, country: e.target.value })
                    }
                  />
                </div>
                <div class="form-group">
                  <input
                    class="input"
                    type="text"
                    name="zip-code"
                    placeholder="ZIP Code"
                    onChange={(e) =>
                      setAddress({ ...address, zipCode: e.target.value })
                    }
                  />
                </div>
                <div class="form-group">
                  <input
                    class="input"
                    type="tel"
                    name="tel"
                    placeholder="Telephone"
                    onChange={(e) =>
                      setAddress({ ...address, telefon: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div class="col-md-5 order-details">
              <div class="section-title text-center">
                <h3 class="title">Your Order</h3>
              </div>
              <div class="order-summary">
                <div class="order-col">
                  <div>
                    <strong>PRODUCT</strong>
                  </div>
                  <div>
                    <strong>TOTAL</strong>
                  </div>
                </div>
                <div class="order-products">
                  {cart.map((el) => (
                    <div class="order-col" key={el._id}>
                      <div>
                        {el.quantity}x {el.productId.name}
                      </div>
                      <div>${el.productId.price}</div>
                    </div>
                  ))}
                </div>
                <div class="order-col">
                  <div>Shiping</div>
                  <div>
                    <strong>FREE</strong>
                  </div>
                </div>
                <div class="order-col">
                  <div>
                    <strong>TOTAL</strong>
                  </div>
                  <div>
                    <strong class="order-total">{total}$</strong>
                  </div>
                </div>
              </div>

              <a
                target="_blank"
                href={`https://api.whatsapp.com/send/?phone=905312281289&text=name:${address.fName},tel:${address.telefon}        
              siparis:${window.location}&type=phone_number&app_absent=0`}
                onClick={() => {
                  Checkout(address);
                }}
                class="primary-btn order-submit"
              >
                Place order
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="newsletter" class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="newsletter">
                <p>
                  Sign Up for the <strong>NEWSLETTER</strong>
                </p>
                <form>
                  <input
                    class="input"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  <button class="newsletter-btn">
                    <i class="fa fa-envelope"></i> Subscribe
                  </button>
                </form>
                <ul class="newsletter-follow">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
