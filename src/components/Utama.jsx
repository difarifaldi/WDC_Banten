import { Container, Row, Col } from "react-bootstrap";
const Utama = () => {
  return (
    <>
      <Container fluid className="d-flex justify-content-start align-items-center myBG" id="home">
        <Row className="utama">
          <Col className=" ms-5 text-white ">
            <h1 className="fw-bold">Banten</h1>
            <h5 className="mt-2 mb-3"> Nadi Tradisi yang Abadi </h5>
            <a className="btn btn-primary" href="#tentang">
              Jelajahi
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Utama;
