import { Button, Container, Navbar, Modal } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar expand="small">
      <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      <Button>Cart 0 Items</Button>
    </Navbar>
  );
}

export default NavbarComponent;
