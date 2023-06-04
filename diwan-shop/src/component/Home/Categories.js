import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Categories = ({ filteredCategory }) => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            {filteredCategory(categories).map(
              (category) =>
                category.elementState === true && (
                  <div className="col-md-4 col-xs-6" key={category._id}>
                    <Link to={`/category/${category.categoryName}`}>
                      <div className="shop">
                        <div className="shop-img">
                          <img src={`./img/${category.image}`} alt="" />
                        </div>
                        <div className="shop-body">
                          <h3>{category.categoryName}</h3>
                          <a href="#" className="cta-btn">
                            Shop now{" "}
                            <i className="fa fa-arrow-circle-right"></i>
                          </a>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
