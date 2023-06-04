import React, { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import { useAppContext } from "../../context/appContext";
import FormRow from "../modal/FormRow";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const AddCategoryForm = () => {
  const { updateCatId, categoryName, elementState, isAdd, isEdit, image } =
    useSelector((state) => state.categories);
  const params = useParams();
  const [data, setData] = useState({
    categoryName,
    elementState,
    image,
    _id: updateCatId || params.id,
  });
  const handleImage = (e) => {
    const x = e.target.files;
    const list = [];

    for (let i = 0; i < x.length; i++) {
      list.push(e.target.files[i].name);
    }

    setData({ ...data, image: list });
  };
  const { setForm, addItem, UpdateItem } = useAppContext();

  return (
    <form
      className="editForm"
      onSubmit={(e) => {
        if (isAdd) {
          return addItem(e, data);
        } else {
          return UpdateItem(e, data);
        }
      }}
      encType="multipart/form-data"
    >
      <h3>{isEdit ? "Edit Category" : "Add Category"}</h3>
      <span className="delete-section">
        <CloseButton
          onClick={() => {
            setForm(false);
          }}
        />
      </span>
      <FormRow
        type="text"
        name="Category Name"
        value={data.categoryName}
        handleChange={(e) => setData({ ...data, categoryName: e.target.value })}
      />
      <FormRow type="file" name="Image" handleChange={(e) => handleImage(e)} />
      <h5>State</h5>
      <FormRow
        type="checkbox"
        name="Active"
        value={data.elementState}
        checked={data.elementState}
        handleChange={(e) =>
          setData({ ...data, elementState: !data.elementState })
        }
      />

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddCategoryForm;
