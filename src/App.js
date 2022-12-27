import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <NavbarComponent></NavbarComponent>
    </Container>
  );
}

export default App;
