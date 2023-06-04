import { useSelector } from "react-redux";
import AppNavbar from "../secrions/AppNavbar";
import Products from "./Products";
import Categories from "./Categories";
import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";

function Home() {
  const { loadingColor } = useSelector((state) => state.colors);
  const [value, setValue] = useState("");

  const params = useParams();
  useEffect(() => {
    (async () => {
      await axios.get(`/category/${params.name}`);
    })();
  }, [params.name]);
  if (loadingColor) return <Loading />;

  const filterPro = (element) => {
    return element.filter((e) =>
      e.name.toLowerCase().includes(value.toLowerCase())
    );
  };
  const filterCat = (element) => {
    return element.filter((e) =>
      e.categoryName.toLowerCase().includes(value.toLowerCase())
    );
  };
  const filtereHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <AppNavbar filtereHandler={filtereHandler} value={value} />
      <Categories filteredCategory={filterCat} />
      <Products filteredProduct={filterPro} />
    </>
  );
}

export default Home;
