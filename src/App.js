import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import ProductsPage from "./components/pages/ProductsPage";
import NotFound from "./components/pages/NotFound";
import Layout from "./components/Layout";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar name="AshbyInc" />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/products" component={ProductsPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
