import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import CloseButton from "react-bootstrap/CloseButton";

function UpdatePro() {
  const { UpdateItem, setForm } = useAppContext();
  const { products, updateProId } = useSelector((state) => state.products);
  const { sizes } = useSelector((state) => state.sizes);
  const { colors } = useSelector((state) => state.colors);
  const { categories } = useSelector((state) => state.categories);
  const selectedProduct = products.filter((user) => user._id === updateProId);
  const {
    name,
    categories: selectedCategory,
    price,
    image,
    description,
    sizeList,
    colorList,
    elementState,
  } = selectedProduct[0];
  const [value, setValue] = useState({
    name,
    categories: selectedCategory,
    price,
    image,
    description,
    sizeList: sizeList,
    colorList,
    elementState,
    _id: updateProId,
  });
  const handleImage = (e) => {
    const image = e.target.files[0].name;
    const array = image.forEach((element) => {
      array.push(element.name);
    });

    setValue({ ...value, image: array });
  };

  const setSize = (itemName, state) => {
    let list = [...value.sizeList];
    if (state) {
      list.push(itemName);
      console.log(list);
      setValue({ ...value, sizeList: list });
    } else {
      list = value.sizeList.filter((item) => itemName !== item);
      console.log(list);

      setValue({ ...value, sizeList: list });
    }
  };
  const setColor = (itemName, state) => {
    let list = [...value.colorList];

    if (state) {
      list.push(itemName);
      setValue({ ...value, colorList: list });
      console.log(value);
    } else {
      list = value.colorList.filter((item) => itemName !== item);
      setValue({ ...value, colorList: list });
    }
  };

  return (
    <div className="editForm">
      {value && (
        <Form onSubmit={(e) => UpdateItem(e, value)}>
          <span className="delete-section">
            <CloseButton
              onClick={() => {
                setForm(false);
              }}
            />
          </span>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={value.name}
              onChange={(e) => setValue({ ...value, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={value.description}
              onChange={(e) =>
                setValue({ ...value, description: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              value={value.price}
              onChange={(e) => setValue({ ...value, price: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <select
              className="input-select m-2"
              onClick={(e) =>
                setValue({ ...value, categories: e.target.value })
              }
            >
              {categories.map((category) => (
                <option
                  selected={
                    selectedCategory[0] === category.categoryName ? true : false
                  }
                >
                  {category.categoryName}
                </option>
              ))}
            </select>
          </Form.Group>
          <div className="row">
            <div className="col-md-6">
              <h5>Sizes</h5>
              {sizes.map((size) => (
                <Form.Group className="form-check form-switch">
                  <Form.Check
                    className="mb-3"
                    type="checkbox"
                    id="custom-switch"
                    name={size.sizeName}
                    label={size.sizeName}
                    // checked={value.elementState === true ? true : false}
                    checked={
                      value.sizeList.filter((i) => i === size.sizeName)[0] ===
                      size.sizeName
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      setSize(e.target.name, e.target.checked);
                    }}
                  />
                </Form.Group>
              ))}
            </div>
            <div className="col-md-6">
              <h5>Colors</h5>
              {colors.map((color) => (
                <Form.Group className="form-check form-switch">
                  <Form.Check
                    className="mb-3"
                    type="checkbox"
                    id="custom-switch"
                    name={color.colorName}
                    label={color.colorName}
                    checked={
                      value.colorList.filter(
                        (i) => i === color.colorName
                      )[0] === color.colorName
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      setColor(e.target.name, e.target.checked);
                    }}
                  />
                </Form.Group>
              ))}
            </div>
          </div>
          <h5>State</h5>
          <div className="mb-3 form-check form-switch">
            <label>Active</label>
            <input
              type="checkbox"
              id="custom-switch"
              label="Active"
              className="form-check-input"
              checked={value.elementState === true ? true : false}
              onChange={(e) =>
                setValue({ ...value, elementState: !value.elementState })
              }
            />
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control
              multiple
              type="file"
              className="form-control"
              onChange={(e) => handleImage(e)}
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}

export default UpdatePro;
