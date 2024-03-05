import { Container, Row, Col, Image } from "react-bootstrap";
import Banten from "../assets/img/b3.jpg";

const About = () => {
  return (
    <>
      <Container id="tentang" className="pt-3">
        <Row className="  justify-content-center align-items-center">
          <h1 className="text-center my-5">Sekilas tentang Banten</h1>
          <Col lg={5} xs={12}>
            <Image src={Banten} style={{ maxWidth: "100%", height: "auto" }} />
          </Col>
          <Col lg={7} xs={12}>
            <p className="lh-lg" style={{ textAlign: "justify" }}>
              Banten, provinsi di barat Pulau Jawa, memikat dengan alam dan sejarahnya yang luar biasa. Tempat ini menyimpan jejak kesultanan yang agung dan budaya yang memikat. Dari seabad ke seabad, Banten menjadi saksi bisu perkembangan
              sejarah dan memelihara keberagaman budaya yang kaya. Setiap sudutnya menggambarkan kisah lama, mengundang wisatawan untuk menyusuri lorong waktu yang penuh pesona. Banten, di antara perbukitan dan pantai, adalah persembahan
              harmoni alam dan warisan budaya yang tak ternilai.
            </p>
          </Col>
        </Row>
      </Container>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150 opacity-25">
        <path
          d="M 0,400 L 0,225 C 202.8,200.73333333333335 405.6,176.46666666666667 541,178 C 676.4,179.53333333333333 744.4,206.86666666666665 883,194 C 1021.6,181.13333333333335 1230.8,128.06666666666666 1440,75 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#9bb8cd"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
    </>
  );
};

export default About;
