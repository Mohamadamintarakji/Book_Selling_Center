import React, { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import { useAppContext } from "../../context/appContext";
import FormRow from "../modal/FormRow";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const AddSizeForm = () => {
  const { updateSizeId, sizeName, elementState, isAdd, isEdit } = useSelector(
    (state) => state.sizes
  );
  const params = useParams();
  console.log(elementState);
  const [data, setData] = useState({
    sizeName,
    elementState,
    _id: updateSizeId || params.id,
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
      <h3>{isEdit ? "Edit Size" : "Add Size"}</h3>
      <span className="delete-section">
        <CloseButton
          onClick={() => {
            setForm(false);
          }}
        />
      </span>
      <FormRow
        type="text"
        name="Size Name"
        value={data.sizeName}
        handleChange={(e) => setData({ ...data, sizeName: e.target.value })}
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
          Submit{" "}
        </button>
      </div>
    </form>
  );
};

export default AddSizeForm;
