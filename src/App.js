import React from "react";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import MovieForm from "./components/movieForm.jsx";
import Rentals from "./components/rentals.jsx";
import NotFound from "./components/notFound.jsx";
import Customers from "./components/customers.jsx";
import NavBar from "./components/navBar.jsx";
import LoginForm from "./components/loginForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
