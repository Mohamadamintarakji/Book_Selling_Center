import Wrapper from "../../Wrapper/Dashboard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import CloseButton from "react-bootstrap/CloseButton";
import Form from "react-bootstrap/Form";
import { useAppContext } from "../../context/appContext";
import Add from "../add/Add";

const SizesTable = () => {
  const { sizes } = useSelector((state) => state.sizes);

  const { deleteItem, UpdateItem, setUpdateSize } = useAppContext();
  const { form } = useAppContext();

  const HandleUpdate = (e, size) => {
    const data = {
      sizeName: size.sizeName,
      elementState: !size.elementState,
      _id: size._id,
    };

    UpdateItem(e, data);
  };
  return (
    <>
      <Wrapper>
        <>
          {sizes.length > 0 ? (
            
              <Table>
                <thead>
                  <tr>
                    <th>SizeName</th>
                    <th>State</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((size) => (
                    <tr key={size._id}>
                      <td>{size.sizeName}</td>
                      <td>
                        {" "}
                        <Form>
                          <Form.Check
                            type="switch"
                            id={size._id}
                            label="Active"
                            name={size.sizeName}
                            checked={size.elementState === true ? true : false}
                            onChange={(e) => HandleUpdate(e, size)}
                          />
                        </Form>
                      </td>

                      <td>
                        {" "}
                        <span className="delete-section">
                          <CloseButton onClick={() => deleteItem(size._id)} />
                        </span>
                        <span className="edit-section">
                          <Link
                            to={`/dashboard/MangeSizes`}
                            onClick={() => setUpdateSize(size)}
                          >
                            <i className="fa-regular fa-pen-to-square"></i>
                          </Link>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            
          ) : (
            <h1>No Items</h1>
          )}
          {form && <Add />}
        </>
      </Wrapper>
    </>
  );
};

export default SizesTable;
