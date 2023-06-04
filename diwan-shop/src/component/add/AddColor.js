import React, { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import { useAppContext } from "../../context/appContext";
import FormRow from "../modal/FormRow";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const AddColorForm = () => {
  const { updateColorId, colorName, elementState, isAdd, isEdit } = useSelector(
    (state) => state.colors
  );
  const params = useParams();
  const [data, setData] = useState({
    colorName,
    elementState,
    _id: updateColorId || params.id,
  });

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
      <h3>{isEdit ? "Edit Color" : "Add Color"}</h3>
      <span className="delete-section">
        <CloseButton
          onClick={() => {
            setForm(false);
          }}
        />
      </span>
      <FormRow
        type="text"
        name="Color Name"
        value={data.colorName}
        handleChange={(e) => setData({ ...data, colorName: e.target.value })}
      />
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

export default AddColorForm;
