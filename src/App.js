import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';


const Container = styled.div`
font-family: 'Comfortaa', cursive;
`


function App() {
  return (
    <Container>
    <Home></Home>
    </Container>
  );
}

export default App;
