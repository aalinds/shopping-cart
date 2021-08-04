import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addQuantity, subtractQuantity } from "../../actions/cart-actions";

class Cart extends Component {
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };

  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };

  render() {
    console.log(this.props.items);
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <li key={item.id}>
            <div>
              <img src={item.icon} alt={item.icon} />
            </div>
            <div>
              <span>{item.name}</span>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <p>
                <b>Total: {item.quantity * item.price}</b>
              </p>
              <div>
                <Link to="/cart">
                  <i
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  >
                    +
                  </i>
                </Link>
                <Link to="/cart">
                  <i
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  >
                    -
                  </i>
                </Link>
              </div>
            </div>
          </li>
        );
      })
    ) : (
      <p>EMPTY</p>
    );

    return (
      <div>
        <ul>{addedItems}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
