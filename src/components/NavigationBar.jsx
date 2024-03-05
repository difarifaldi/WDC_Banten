import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar className=" p-2 sticky-top p-0 px-4 px-lg-5 w-full " style={{ backgroundColor: "#9BB8CD" }}>
        <Container>
          <Navbar.Brand className="text-white">Formality13</Navbar.Brand>
          <Nav>
            <Nav.Link className="text-white" href="#home">
              Beranda
            </Nav.Link>
            <Nav.Link className="text-white" href="#tentang">
              Tentang
            </Nav.Link>
            <Nav.Link className="text-white" href="#wisata">
              Wisata
            </Nav.Link>
            <Nav.Link className="text-white" href="#budaya">
              Budaya
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavigationBar;
