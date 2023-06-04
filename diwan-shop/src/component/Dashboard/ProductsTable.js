import Wrapper from "../../Wrapper/Dashboard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CloseButton from "react-bootstrap/CloseButton";
import { useAppContext } from "../../context/appContext";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Add from "../add/Add";

const ProductsTable = () => {
  const { deleteItem, setUpdatePro, UpdateItem } = useAppContext();
  const { products } = useSelector((state) => state.products);
  const { form } = useAppContext();

  const HandleUpdate = (e, product) => {
    const data = {
      elementState: !product.elementState,
      _id: product._id,
    };

    UpdateItem(e, data);
  };
  return (
    <>
      <Wrapper>
        <>
          {products.length > 0 ? (
            <>
              <Table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Categories</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>State</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td>{product.name}</td>
                      <td>{product.categories}</td>
                      <td>{product.description}</td>
                      <td>{product.price}</td>

                      <td>
                        {" "}
                        <Form>
                          <Form.Check
                            type="switch"
                            id={product._id}
                            label="Active"
                            name={product.name}
                            checked={
                              product.elementState === true ? true : false
                            }
                            onChange={(e) => HandleUpdate(e, product)}
                          />
                        </Form>
                      </td>
                      <td>
                        {" "}
                        <span className="delete-section">
                          <CloseButton
                            onClick={() => deleteItem(product._id)}
                          />
                        </span>
                        <span className="edit-section">
                          <Link
                            to={`/dashboard/MangeProducts`}
                            onClick={() => setUpdatePro(product)}
                          >
                            <i className="fa-regular fa-pen-to-square"></i>
                          </Link>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              {form && <Add />}
            </>
          ) : (
            <h1>No Items</h1>
          )}
        </>
      </Wrapper>
    </>
  );
};

export default ProductsTable;
