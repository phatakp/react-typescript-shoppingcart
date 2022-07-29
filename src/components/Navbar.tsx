import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBS className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            variant="outline-primary"
            className="rounded-circle"
            style={{ position: "relative" }}
            onClick={openCart}>
            <FaCartPlus style={{ width: "1.5rem", height: "2.1rem" }} />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "#fff",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: "0",
                right: "0",
                transform: "translate(25%,25%)",
              }}>
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBS>
  );
};
