import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import Pay from './components/Pay';
import Success from './components/Success';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';


const Container = styled.div`
font-family: 'Comfortaa', cursive;
/* font-family: 'Fira Code', cursive; */
`


function App() {
  return (
    // <Container>
    // <Home></Home>
    // </Container>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/products">
          <ProductList></ProductList>
        </Route>
        <Route path="/products/:category">
          <ProductList></ProductList>
        </Route>
        <Route path="/product/:id">
          <Product></Product>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/Register">
          <Register></Register>
        </Route>
        <Route path="/pay">
          <Pay></Pay>
        </Route>
        <Route path="/success">
          <Success></Success>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
