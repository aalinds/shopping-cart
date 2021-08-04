import React, { Component } from "react";
import axios from "axios";
import "./Brands.css";
import Brand from "../Brand/Brand";
import { Link } from "react-router-dom";

let DATA_URL =
  "https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json";

class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products_data: [],
      brands_data: {},
    };
  }

  componentDidMount = () => {
    localStorage.setItem("cartItems", JSON.stringify([]));
    axios.get(DATA_URL).then((res) => {
      let brands_data = {};

      res.data.forEach((product) => {
        if (brands_data[product.brand]) {
          brands_data[product.brand].push(product);
        } else {
          brands_data[product.brand] = [product];
        }
      });

      this.setState({
        products_data: res.data,
        brands_data,
      });
    });
  };

  render() {
    return (
      <div className="brands-main-div">
        <h1>BRANDS</h1>
        {Object.keys(this.state.brands_data).map((brand_name) => {
          return (
            <div>
              <Brand
                name={brand_name}
                count={this.state.brands_data[brand_name].length}
                key={brand_name}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Brands;
