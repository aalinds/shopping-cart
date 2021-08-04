import { Switch, Route } from "react-router-dom";

import Brands from "./components/Brands/Brands";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/:brand_name" component={Products} />
        <Route path="/" component={Brands} />
      </Switch>
    </div>
  );
}

export default App;
