import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Missing from "./Missing";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import NewPost from "./NewPost";
import PostPage from "./PostPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/post">
          <NewPost />
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
