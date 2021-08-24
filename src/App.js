import "./App.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Container, Row} from "react-bootstrap";
import BookStore from "./components/BookStore";
import Cart from "./components/Cart";
import CartIndicatore from "./components/CartIndicatore";

function App() {
  return (
    <>
      <Router>
        <Container>
          <Row>
            <Col sm={12} className="text-center background-div">
              <Link to="/">
                <h1>Strivazon Book Store</h1>
              </Link>
            </Col>
            <CartIndicatore />
          </Row>
          {/* <Route exact path="/basic" component={HomePage} /> */}
          <Route path="/" exact component={BookStore} />
          <Route path="/cart" exact component={Cart} />
        </Container>
      </Router>
    </>
  );
}

export default App;
