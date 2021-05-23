import { Route, Switch } from "react-router-dom";

import "./App.css";

import { HomePage, AuthPage, FourOhFourPage } from "./pages";

import { ProtectedRoute } from "./components";
import Auth from "./views/Auth";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path={`/login`}
          render={(props) => <Auth {...props} authRoute="login" />}
        />
        <Route
          exact
          path={`/register`}
          render={(props) => <Auth {...props} authRoute="register" />}
        />
        <ProtectedRoute exact path={"/"} component={HomePage} />
        <Route path={`/*`} component={FourOhFourPage} />
      </Switch>
    </div>
  );
}

export default App;
