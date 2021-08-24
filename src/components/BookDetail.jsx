import {Component} from "react";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {addToCartAction} from "../redux/actions";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToCart: (book) => dispatch(addToCartAction(book)),
});

class BookDetail extends Component {
  // here we can expect to have
  // this.props.cart
  // this.props.user
  // this.props.addToCart
  state = {
    book: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.bookSelected !== this.props.bookSelected) {
      this.setState({
        book: this.props.bookSelected,
      });
    }
  }

  render() {
    return (
      <div className="mt-3">
        {this.state.book ? (
          <>
            <Row>
              <Col sm={12}>
                <h1>{this.state.book.title}</h1>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={4}>
                <div className="mt-3">
                  <img
                    className="book-cover"
                    src={this.state.book.imageUrl}
                    alt="book selected"
                  />
                </div>
              </Col>
              <Col sm={8}>
                <p>
                  <span className="font-weight-bold">Description:</span>
                  {this.state.book.description}
                </p>
                <p>
                  <span className="font-weight-bold">Price:</span>
                  {this.state.book.price}
                </p>
                {this.props.user.firstName ? (
                  <Button
                    color="primary"
                    onClick={() => this.props.addToCart(this.state.book)}
                  >
                    ADD TO CART
                  </Button>
                ) : (
                  <div>Please log in to add items to the cart</div>
                )}
              </Col>
            </Row>
          </>
        ) : (
          <Row>
            <Col sm={12}>
              <h3>Please select a book!</h3>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);

// how can we interact with the redux store from a component?
// CONNECTING IT!
