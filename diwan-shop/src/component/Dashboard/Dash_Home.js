import Wrapper from "../../Wrapper/Dashboard";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Dash_Home = () => {
  return (
    <>
      <Wrapper>
        {" "}
        <Row>
          <Col className=" col-md-4 mb-4 ">
            <Card className="dash-home ">
              <Row className="d-flex align-items-center">
                <Col md={6}>
                  <h1>
                    <i className="fa-solid fa-bag-shopping"></i>
                  </h1>
                </Col>
                <Col md={6}>
                  <Card.Title>
                    <h1>3</h1>
                  </Card.Title>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Body className="mt-3">
                    <Card.Text>
                      {" "}
                      <h3>Mange Products</h3>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className=" col-md-4 mb-4 ">
            <Card className="dash-home ">
              <Row className="d-flex align-items-center">
                <Col md={6}>
                  <h1>
                    <i className="fa-solid fa-chart-simple"></i>
                  </h1>
                </Col>
                <Col md={6}>
                  <Card.Title>
                    <h1>5</h1>
                  </Card.Title>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Body className="mt-3">
                    <Card.Text>
                      {" "}
                      <h3>Mange Categories</h3>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className=" col-md-4 mb-4 ">
            <Card className="dash-home ">
              <Row className="d-flex align-items-center">
                <Col md={6}>
                  <h1>
                    <i className="fa-sharp fa-solid fa-palette"></i>
                  </h1>
                </Col>
                <Col md={6}>
                  <Card.Title>
                    <h1>6</h1>
                  </Card.Title>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Body className="mt-3">
                    <Card.Text>
                      {" "}
                      <h3>Mange Colors</h3>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className=" col-md-4 mb-4 ">
            <Card className="dash-home ">
              <Row className="d-flex align-items-center">
                <Col md={6}>
                  <h1>
                    <i className="fa-solid fa-ruler-horizontal"></i>
                  </h1>
                </Col>
                <Col md={6}>
                  <Card.Title>
                    <h1>4</h1>
                  </Card.Title>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Body className="mt-3">
                    <Card.Text>
                      {" "}
                      <h3>Mange Sizes</h3>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default Dash_Home;
