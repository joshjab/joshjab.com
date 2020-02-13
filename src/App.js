import React from 'react';
import { HashRouter, Route, Link} from "react-router-dom";
import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap'
import { Grid } from 'react-bootstrap'
import logo from "./logo.svg";
import './App.css';

import Header from './components/Header'

function App() {
  return (
    <div>
    <HashRouter basename='/'>

       <Header></Header>
       <h1>WIP</h1>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />

    </HashRouter>
    </div>
   );
}

const Home = () => Home
const About = () => About
const Projects = () => Projects
const Blog = () => Blog

export default App;
