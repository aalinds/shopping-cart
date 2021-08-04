import React from "react";
import axios from "axios";
import "./Products.css";
import { connect } from "react-redux";
import { addQuantity, subtractQuantity } from "../../actions/cart-actions";
import { Link } from "react-router-dom";

let DATA_URL =
  "https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products_data: [],
      brand_name: "",
    };
  }

  componentDidMount = () => {
    let brand_name = this.props.match.params.brand_name;
    let products_data = [];

    axios.get(DATA_URL).then((res) => {
      res.data.forEach((product) => {
        if (product.brand.toLowerCase() === brand_name) {
          products_data.push(product);
        }
      });
      this.setState({
        products_data,
        brand_name,
      });
    });
  };

  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };

  render() {
    // console.log(this.props.items);
    return (
      <div className="products-main-div">
        <h1>Products of {this.state.brand_name}</h1>
        <div>
          <Link to="/cart">Go to Cart</Link>
        </div>
        {this.state.products_data.map((product) => {
          return (
            <div className="product-div" key={product.id}>
              <div className="product-img"></div>
              <div className="product-info">
                <div>Name: {product.name}</div>
                <div>Price: {product.price}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "20px",
                }}
              >
                <div>-</div>
                <div>{product.quantity ? product.quantity : 0}</div>
                <div onClick={() => this.handleAddQuantity(product.id)}>+</div>
              </div>
            </div>
          );
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);
