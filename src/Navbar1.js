import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
// import Menu from "./Menuapi";

const Navbar1 = (props) => {
  const { filterData } = props;
  // const [data, setData] = React.useState(menudata);
  console.log("filterData", filterData);

  // console.log("data", data);

  return (
    <div>
      <Navbar bg="warning" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Restaurent</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => filterData("fastfood")}>
                  fastfood
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterData("food")}>
                  Food
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterData("drink")}>
                  drinks
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => filterData("lunch")}>
                  lunch
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
