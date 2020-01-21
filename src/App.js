import React from 'react';
import './App.css';
import Navigation from "./components/navigation/navigation";
import {Container} from "reactstrap";
import SearchForm from "./components/searchForm/searchForm";
import {Route, Switch} from "react-router";
import ShowInfo from "./components/showInfo/showInfo";

function App() {
  return (
    <div>
      <Navigation/>
      <Container className='pt-3'>
          <Switch>
              <Route path='/' exact component={SearchForm} />
              <Route path={'/show/:name'} component={ShowInfo} />
          </Switch>
      </Container>
    </div>
  );
}

export default App;
