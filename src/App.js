import { Switch, Route } from "react-router-dom";

import Brands from "./components/Brands/Brands";

function App() {
  return (
    <div>
      <Switch>
        {/* <Route path="/cart" component={Cart} /> */}
        <Route path="/" component={Brands} />
      </Switch>
    </div>
  );
}

export default App;
