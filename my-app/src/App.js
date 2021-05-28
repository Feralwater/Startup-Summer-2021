import './App.css';
import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import StartPage from "./components/profile/StartPage";
import Profile from "./components/profile/Profile";
import EmptyState from "./components/profile/EmptyState";


function App() {

  return (<BrowserRouter>
      <div className="app-wrapper">
        <Switch>
          <Route exact path="/" component={StartPage}/>
          <Route path="/profile/:username" component={Profile}/>
          <Route path="/error" component={EmptyState}/>
          <Redirect to='/'/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
