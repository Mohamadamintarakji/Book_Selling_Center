import React from "react";
import AddProductForm from "../add/AddProduct";
import AddCategoryForm from "../add/AddCategory";
import AddColorForm from "../add/AddColor";
import AddSizeForm from "../add/AddSize";
function Add() {
  return (
    <>
      {window.location.pathname.includes("/dashboard/MangeProducts") && (
        <AddProductForm />
      )}
      {window.location.pathname.includes("/dashboard/MangeCategories") && (
        <AddCategoryForm />
      )}
      {window.location.pathname.includes("/dashboard/MangeColors") && (
        <AddColorForm />
      )}
      {window.location.pathname.includes("/dashboard/MangeSizes") && (
        <AddSizeForm />
      )}
    </>
  );
}
export default Add;
