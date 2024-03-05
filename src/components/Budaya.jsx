import { Container, Row, Col, Image } from "react-bootstrap";
import b1 from "../assets/img/b13.jpeg";
import b2 from "../assets/img/b14.jpg";
import b3 from "../assets/img/b15.jpg";
import b4 from "../assets/img/b16.webp";
import b5 from "../assets/img/blob.svg";

const Budaya = () => {
  return (
    <>
      <Container id="budaya" className="mb-5">
        <Row className="justify-content-center align-items-center">
          <h1 className="text-center my-5">Budaya</h1>
          <Col className="position-relative" lg={5} xs={12}>
            {/* Gambar-gambar */}
            <div className=" d-flex flex-wrap align-items-center justify-content-center position-relative">
              <Image src={b5} style={{ position: "absolute", width: "130%", height: "180%", objectFit: "cover", zIndex: "-1" }} />
              <Image src={b1} style={{ maxWidth: "32%", height: "auto" }} className="m-2" thumbnail />
              <Image src={b4} style={{ maxWidth: "32%", height: "auto" }} className="m-2" thumbnail />
              <Image src={b3} style={{ maxWidth: "32%", height: "auto" }} className="mb-4 mx-2" thumbnail />
              <Image src={b2} style={{ maxWidth: "32%", height: "auto" }} className="mb-4 mx-2" thumbnail />
            </div>
          </Col>
          <Col lg={7} xs={12}>
            <p className="lh-lg" style={{ textAlign: "justify" }}>
              Banten, ladang keberagaman budaya. Suku Baduy, sebagai penjaga tradisi, hidup sederhana di pedalaman yang menjauhkan diri dari modernitas. Namun, kekayaan budaya Banten tidak hanya terbatas pada mereka. Tarian, musik, dan seni
              lokal menjadi bagian tak terpisahkan dari kehidupan sehari-hari. Upacara adat, festival, dan perayaan keagamaan meramaikan panggung budaya Banten, menciptakan kisah warna-warni yang mencerminkan keunikan dan keberagaman
              masyarakatnya.
            </p>
          </Col>
        </Row>
      </Container>

      <svg id="wave" className="opacity-25" width="100%" height="100%" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(155, 184, 205, 1)" offset="0%"></stop>
            <stop stopColor="rgba(155, 184, 205, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M0,70L24,70C48,70,96,70,144,68.3C192,67,240,63,288,61.7C336,60,384,60,432,61.7C480,63,528,67,576,60C624,53,672,37,720,25C768,13,816,7,864,16.7C912,27,960,53,1008,58.3C1056,63,1104,47,1152,38.3C1200,30,1248,30,1296,28.3C1344,27,1392,23,1440,31.7C1488,40,1536,60,1584,58.3C1632,57,1680,33,1728,33.3C1776,33,1824,57,1872,66.7C1920,77,1968,73,2016,71.7C2064,70,2112,70,2160,68.3C2208,67,2256,63,2304,53.3C2352,43,2400,27,2448,30C2496,33,2544,57,2592,56.7C2640,57,2688,33,2736,26.7C2784,20,2832,30,2880,38.3C2928,47,2976,53,3024,51.7C3072,50,3120,40,3168,31.7C3216,23,3264,17,3312,25C3360,33,3408,57,3432,68.3L3456,80L3456,100L3432,100C3408,100,3360,100,3312,100C3264,100,3216,100,3168,100C3120,100,3072,100,3024,100C2976,100,2928,100,2880,100C2832,100,2784,100,2736,100C2688,100,2640,100,2592,100C2544,100,2496,100,2448,100C2400,100,2352,100,2304,100C2256,100,2208,100,2160,100C2112,100,2064,100,2016,100C1968,100,1920,100,1872,100C1824,100,1776,100,1728,100C1680,100,1632,100,1584,100C1536,100,1488,100,1440,100C1392,100,1344,100,1296,100C1248,100,1200,100,1152,100C1104,100,1056,100,1008,100C960,100,912,100,864,100C816,100,768,100,720,100C672,100,624,100,576,100C528,100,480,100,432,100C384,100,336,100,288,100C240,100,192,100,144,100C96,100,48,100,24,100L0,100Z"
        ></path>
      </svg>
    </>
  );
};

export default Budaya;
