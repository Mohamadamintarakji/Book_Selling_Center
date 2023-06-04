import React, { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
// import AlertMsg from "../Alert";
import { useSelector } from "react-redux";
import { useAppContext } from "../../context/appContext";
import FormRow from "../modal/FormRow";
import FormRowSelect from "../modal/FormRowSelect";
// import Wrapper from "../../Wrapper/FormRow";
import UpdateProduct from "../update/UpdateProduct";
const AddProductForm = () => {
  const { updateProId } = useSelector((state) => state.products);
  const { sizes } = useSelector((state) => state.sizes);
  const { colors } = useSelector((state) => state.colors);
  const { categories } = useSelector((state) => state.categories);
  const { addProduct, setForm } = useAppContext();

  const [data, setData] = useState({
    name: "",
    description: "",
    categories,
    price: "",
    colorList: [],
    sizeList: [],
    elementState: "",
    image: [],
  });
  const handleImage = (e) => {
    const x = e.target.files;
    const list = [];

    for (let i = 0; i < x.length; i++) {
      list.push(e.target.files[i].name);
    }

    setData({ ...data, image: list });
  };
  const setSize = (itemName, state) => {
    console.log(itemName);
    console.log(itemName);
    let list = [];
    if (state) {
      list.push(itemName);
      setData({ ...data, sizeList: list });
    } else {
      list = data.sizeList.filter((item) => itemName !== item);
      setData({ ...data, sizeList: list });
    }
  };
  const setColor = (itemName, state) => {
    let list = [];
    console.log(itemName);
    console.log(state);

    if (state) {
      list = data.colorList;
      list.push(itemName);
      setData({ ...data, colorList: list });
    } else {
      list = data.colorList.filter((item) => itemName !== item);
      setData({ ...data, colorList: list });
    }
  };

  return (
    <>
      {updateProId ? (
        <UpdateProduct />
      ) : (
        <form
          onSubmit={(e) => addProduct(e, data)}
          encType="multipart/form-data"
          className="editForm"
        >
          {/* {showAlert && <AlertMsg alertType={alertType} alertText={alertText} />} */}
          <span className="delete-section">
            <CloseButton
              onClick={() => {
                setForm(false);
              }}
            />
          </span>
          <FormRow
            type="text"
            name="Name"
            value={data.fname}
            handleChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <FormRow
            type="text"
            name="Description"
            value={data.description}
            handleChange={(e) =>
              setData({ ...data, description: e.target.value })
            }
          />
          <FormRow
            type="text"
            name="Price"
            value={data.price}
            handleChange={(e) => setData({ ...data, price: e.target.value })}
          />
          <FormRowSelect
            name="categories"
            labelText="categories"
            value={data.categoryName}
            handleChange={(e) => {
              setData({ ...data, categories: e.target.value });
            }}
            list={categories}
          />

          <div className="row mt-2">
            <div className="col-md-6">
              <h5>Sizes</h5>
              {sizes.map(
                (size) =>
                  size.elementState === true && (
                    <FormRow
                      type="checkbox"
                      name={size.sizeName}
                      handleChange={(e) => {
                        setSize(e.target.name, e.target.checked);
                      }}
                    />
                  )
              )}
            </div>
            <div className="col-md-6">
              {" "}
              <h5>Colors</h5>
              {colors.map(
                (color) =>
                  color.elementState === true && (
                    <FormRow
                      type="checkbox"
                      name={color.colorName}
                      handleChange={(e) => {
                        setColor(e.target.name, e.target.checked);
                      }}
                    />
                  )
              )}
            </div>
          </div>
          <h5>State</h5>
          <FormRow
            type="checkbox"
            name="Active"
            value={data.elementState}
            handleChange={(e) =>
              setData({ ...data, elementState: !data.elementState })
            }
          />
          <FormRow
            type="file"
            name="Image"
            handleChange={(e) => handleImage(e)}
          />

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default AddProductForm;
