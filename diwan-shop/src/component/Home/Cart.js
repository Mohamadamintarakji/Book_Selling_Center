import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AppNavbar from "../secrions/AppNavbar";
import { useAppContext } from "../../context/appContext";
import Loading from "../Loading";

function Cart() {
  let { cart, loading } = useSelector((state) => state.cart);

  const { deleteFromCart } = useAppContext();
  return (
    <>
      <AppNavbar />
      {loading ? (
        <Loading />
      ) : (
        <Container className="p-5">
          <h1>{cart.length === 0 ? "Empty Cart" : "Cart"}</h1>
          {cart.length > 0 && (
            <Table striped bordered hover className="m-3">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>qnt</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartItem) => (
                  <tr key={cartItem._id}>
                    <td>{cartItem.productId.name}</td>
                    <td>{cartItem.productId.categories}</td>
                    <td>{cartItem.productId.price}</td>
                    <td>{cartItem.quantity}</td>
                    <td>
                      <Button
                        variant="danger"
                        className="m-2"
                        onClick={() => deleteFromCart(cartItem)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          {cart.length > 0 && (
            <Row>
              <Col>
                <h5>Total:</h5>
                <Link to={`/check-out`}>
                  <Button variant="outline-primary" className="m-2">
                    Check out
                  </Button>
                </Link>
              </Col>
            </Row>
          )}
        </Container>
      )}
    </>
  );
}
export default Cart;
