import { FC } from "react"
import { Route } from "react-router";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

const App: FC = () => (
  <>
    <p>弊社のホームページへようこそ!</p>
    <Route exact path="/" component={Home} />
    <Route path="/abount">
      <About />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
  </>
);

export default App;

