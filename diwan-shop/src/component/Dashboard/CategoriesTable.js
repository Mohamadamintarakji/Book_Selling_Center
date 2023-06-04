import Wrapper from "../../Wrapper/Dashboard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import CloseButton from "react-bootstrap/CloseButton";
import AddCategory from "../add/Add";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { useAppContext } from "../../context/appContext";
import Add from "../add/Add";

const CategoriesTable = () => {
  const { categories, updateCatId } = useSelector((state) => state.categories);
  const { deleteItem, UpdateItem, setUpdateCat } = useAppContext();

  const ref = useRef(null);
  const { form } = useAppContext();

  const HandleUpdate = (e, category) => {
    const data = {
      categoryName: category.categoryName,
      elementState: !category.elementState,
      image: category.image,
      _id: category._id,
    };
    UpdateItem(e, data);
  };

  return (
    <>
    <Wrapper>
      <>
        {categories.length > 0 ? (
            <Table>
              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>State</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category._id}>
                    <td>{category.categoryName}</td>

                    <td>
                      <Form>
                        <Link>
                          <Form.Check
                            type="switch"
                            id={category._id}
                            ref={ref}
                            label="Active"
                            name={category.categoryName}
                            checked={
                              category.elementState === true ? true : false
                            }
                            onChange={(e) => HandleUpdate(e, category)}
                          />
                        </Link>
                      </Form>
                    </td>
                    <td>
                      {" "}
                      <span className="delete-section">
                        <CloseButton onClick={() => deleteItem(category._id)} />
                      </span>
                      <span className="edit-section">
                        <Link
                          to={`/dashboard/MangeCategories`}
                          onClick={() => setUpdateCat(category)}
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

export default CategoriesTable;
