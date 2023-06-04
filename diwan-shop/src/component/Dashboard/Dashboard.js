import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoriesTable from "./CategoriesTable";
import ProductsTable from "./ProductsTable";
import SizesTable from "./SizesTable";
import ColorsTable from "./ColorsTable";
import DashHome from "./Dash_Home";
import Wrapper from "../../Wrapper/Dashboard";
import { useAppContext } from "../../context/appContext";
import Loading from "../Loading";

function Dashboard() {
  const { products, error, loadingPro } = useSelector(
    (state) => state.products
  );
  const { categories, loadingCat } = useSelector((state) => state.categories);
  const { colors, loadingColor } = useSelector((state) => state.colors);
  const { sizes, loadingSize } = useSelector((state) => state.sizes);
  const url = window.location.pathname;
  const { setForm, setAdd } = useAppContext();

  return (
    <>
      <Wrapper>
        {error && <Alert color="warning">Error in Api</Alert>}
        <Row>
          <Col
            md="2"
            className="p-0"
            onClick={() => {
              setForm(false);
            }}
          >
            <div className="control-side ">
              <div className="admin-avatar">
                <div className="logo">
                  <i className="fa-solid fa-d"></i>
                </div>
                <h5>Shop</h5>
              </div>
              <div className="control-list">
                <ul>
                  <Link className="nav-link" to="/dashboard">
                    <li>
                      <i className="fa-solid fa-home"></i>
                      <span> Home</span>
                    </li>
                  </Link>
                  <Link className="nav-link" to="/dashboard/MangeProducts">
                    <li>
                      <i className="fa-solid fa-bag-shopping"></i>
                      <span> Mange Products</span>
                    </li>
                  </Link>
                  <Link className="nav-link" to="/dashboard/MangeCategories">
                    <li>
                      {" "}
                      <i className="fa-solid fa-chart-simple"></i>
                      <span> Mange Categories</span>
                    </li>
                  </Link>
                  <Link className="nav-link" to="/dashboard/MangeSizes">
                    <li>
                      <i className="fa-solid fa-ruler-horizontal"></i>
                      <span> Mange Sizes</span>
                    </li>
                  </Link>
                  <Link className="nav-link" to="/dashboard/MangeColors">
                    <li>
                      <i className="fa-sharp fa-solid fa-palette"></i>{" "}
                      <span>Mange Colors</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </Col>
          <Col md="10" className="home-section">
            <div className="dashboard-nav">
              {/* <i className="fa-solid fa-bars-staggered"></i> */}
              {url !== "/dashboard" && (
                <Button style={{ width: "115px" }} onClick={() => setAdd()}>
                  {url.includes("/dashboard/MangeProducts") && "AddProduct"}
                  {url.includes("/dashboard/MangeCategories") && "AddCategory"}
                  {url.includes("/dashboard/MangeSizes") && "AddSize"}
                  {url.includes("/dashboard/MangeColors") && "AddColor"}
                </Button>
              )}
            </div>
            {/* <Add /> */}

            <div className="p-4">
              {url === "/dashboard" && <DashHome />}
              {url.includes("/dashboard/MangeProducts") && products && (
                <>{loadingPro ? <Loading /> : <ProductsTable />}</>
              )}
              {url.includes("/dashboard/MangeCategories") && categories && (
                <>{loadingCat ? <Loading /> : <CategoriesTable />}</>
              )}
              {url.includes("/dashboard/MangeSizes") && sizes && (
                <>{loadingSize ? <Loading /> : <SizesTable />}</>
              )}
              {url.includes("/dashboard/MangeColors") && colors && (
                <>{loadingColor ? <Loading /> : <ColorsTable />}</>
              )}
            </div>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
}
export default Dashboard;
