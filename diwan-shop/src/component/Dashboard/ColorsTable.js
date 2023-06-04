import Wrapper from "../../Wrapper/Dashboard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import CloseButton from "react-bootstrap/CloseButton";
import AddProduct from "../add/Add";
import Form from "react-bootstrap/Form";
import { useAppContext } from "../../context/appContext";
import Add from "../add/Add";

const ColorsTable = () => {
  const { colors } = useSelector((state) => state.colors);
  const { deleteItem, UpdateItem, setUpdateColor } = useAppContext();
  const { form } = useAppContext();

  const HandleUpdate = (e, color) => {
    const data = {
      colorName: color.colorName,
      elementState: !color.elementState,
      _id: color._id,
    };

    UpdateItem(e, data);
  };

  return (
    <>
      <Wrapper>
        <>
          {colors.length > 0 ? (
            <Table>
              <thead>
                <tr>
                  <th>Color Name</th>
                  <th>State</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {colors.map((color) => (
                  <tr key={color._id}>
                    <td>{color.colorName}</td>

                    <td>
                      {" "}
                      <Form>
                        <Form.Check
                          type="switch"
                          id={color._id}
                          label="Active"
                          name={color.colorName}
                          checked={color.elementState === true ? true : false}
                          onChange={(e) => HandleUpdate(e, color)}
                        />
                      </Form>
                    </td>
                    <td>
                      {" "}
                      <span className="delete-section">
                        <CloseButton onClick={() => deleteItem(color._id)} />
                      </span>
                      <span className="edit-section">
                        <Link
                          to={`/dashboard/MangeColors`}
                          onClick={() => setUpdateColor(color)}
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

export default ColorsTable;
