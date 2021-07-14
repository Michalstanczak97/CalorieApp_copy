import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Switch, Route} from 'react-router-dom';
import {Router} from "react-router-dom"
import history from './components/history'
import Header from "./components/Header";
import Footer from "./components/Footer";
import FirstPage from "./components/FirstPage";
import ProductTable from "./components/ProductTable";



function App() {
    const [result, setResult] = useState("")
    console.log(result)
  return (
      <Router history={history}>
          <Header/>
          <Switch>
              <Route exact path="/" render={() => <FirstPage getResult={setResult} finishResult={result} />} />
              <Route exact path="/productTable" render ={()=> <ProductTable finishResult={result}/>}/>
          </Switch>
          <Footer/>
      </Router>
  );
}

export default App;
