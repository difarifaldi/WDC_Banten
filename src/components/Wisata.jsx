import { Container, Row, Carousel, Col, Card, Image } from "react-bootstrap";
import W1 from "../assets/img/b1.jpg";
import W2 from "../assets/img/b2.jpg";
import W3 from "../assets/img/b9.jpg";
import W4 from "../assets/img/b4.jpg";
import WA1 from "../assets/img/B5.jpg";
import WA2 from "../assets/img/b6.jpeg";
import WA3 from "../assets/img/b7.jpeg";
import WA4 from "../assets/img/b10.webp";
import WA5 from "../assets/img/b11.webp";
import WA6 from "../assets/img/b12.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar, faStarHalfAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Wisata = () => {
  const [itemDipilih, setItemDipilih] = useState(1); // Secara awal menampilkan item 1

  const handleItemClick = (nomorItem) => {
    setItemDipilih(nomorItem);
  };
  const getGambarByNomor = (nomorItem) => {
    switch (nomorItem) {
      case 1:
        return W1;
      case 2:
        return W2;
      case 3:
        return W3;
      case 4:
        return W4;
      default:
        return W1;
    }
  };

  const getDeskripsiByNomor = (nomorItem) => {
    switch (nomorItem) {
      case 1:
        return "Keraton Kaibon, pusat pemerintahan Kesultanan Banten yang megah. Dibangun pada 1815, kini tersisa puing-puing bersejarah seperti gerbang utama dan sisa bangunan. Menelusuri jejaknya, pengunjung dapat menyaksikan kejayaan masa lalu dan benda-benda peninggalan seperti meriam dan batu prasasti. Sebuah destinasi sejarah yang memukau di Kota Serang, Banten.";
      case 2:
        return "Benteng Speelwijk, jejak sejarah di Banten. Dibangun saat masa kolonial, benteng ini menyimpan kisah Belanda di Indonesia. Meski tua, beberapa bangunannya masih berdiri. Saat berkunjung, rasakan nuansa sejarah dan bayangkan kehidupan di masa lampau. Destinasi sederhana nan bersejarah di Provinsi Banten.";
      case 3:
        return "Masjid Agung Banten, saksi sejarah yang menawan dari Kesultanan Banten. Dibangun pada abad ke-16, masjid ini tetap megah dengan kubah dan lorong-lorong yang indah. Tempat suci ini tak hanya menghadirkan keindahan arsitektur, tapi juga menceritakan kisah keteguhan dan kebesaran masa lalu Banten.";
      case 4:
        return "Vihara Avalokitesvara, tempat peribadatan yang damai di Banten. Sebagai vihara Budha, bangunannya mengagumkan dengan arsitektur tradisional yang indah. Pengunjung dapat menikmati ketenangan di dalamnya dan menelusuri seni dan kebudayaan Buddha yang disajikan dengan apik. Suatu tempat yang mengundang kehadiran untuk merenung dan mencari kedamaian di tengah kesibukan.";
      default:
        return "Deskripsi default";
    }
  };
  const getHeading = (nomorItem) => {
    switch (nomorItem) {
      case 1:
        return "Keraton Kaibon";
      case 2:
        return "Benteng Speelwijk";
      case 3:
        return "Masjid Agung Banten";
      case 4:
        return "Vihara Avalokitesvara";
      default:
        return "Deskripsi default";
    }
  };
  const getGambarWisata = (nomorItem) => {
    switch (nomorItem) {
      case 1:
        return WA1;
      case 2:
        return WA2;
      case 3:
        return WA3;
      case 4:
        return WA4;
      case 5:
        return WA5;
      case 6:
        return WA6;
      default:
        return WA1;
    }
  };
  const getTempatWisata = (nomorItem) => {
    switch (nomorItem) {
      case 1:
        return "Telaga Biru Cisoka";
      case 2:
        return "Curug Putri Carita";
      case 3:
        return "Pantai Sawarna";
      case 4:
        return "Taman Nasional Ujung Kulon";
      case 5:
        return "Pantai Anyer";
      case 6:
        return "Kampung Marengo Baduy Luar";
      default:
        return "Deskripsi default";
    }
  };
  const getLokasi = (nomorItem) => {
    switch (nomorItem) {
      case 1:
        return "Jl Cigaru Cisoka, Cisoka, Tangerang, Banten";
      case 2:
        return "Sukarame, Carita, Pandeglang, Banten";
      case 3:
        return "Sawarna, Kec. Bayah, Kabupaten Lebak, Banten 42393";
      case 4:
        return " Ujungjaya, Kec. Sumur, Kabupaten Pandeglang, Banten";
      case 5:
        return "Jl. Raya Karang Bolong, Bandulu, Kec. Anyar, Kabupaten Serang, Banten";
      case 6:
        return " Kanekes, Kec. Leuwidamar, Kabupaten Lebak, Banten";
      default:
        return "Deskripsi default";
    }
  };
  const getMaps = (nomorItem) => {
    switch (nomorItem) {
      case 1:
        return "https://maps.app.goo.gl/jPSxC4r2vjPvtSmg8";
      case 2:
        return "https://maps.app.goo.gl/ubd1NTk4iWdbdenc7";
      case 3:
        return "https://maps.app.goo.gl/YcqTHJXoEax1Sh4G6";
      case 4:
        return "https://maps.app.goo.gl/m7WG7qZD6oJUHyy67";
      case 5:
        return "https://maps.app.goo.gl/4FLis7DeEnDH4KnJ6";
      case 6:
        return "https://maps.app.goo.gl/K97BWm8REKrXfRPk7";
      default:
        return "https://maps.app.goo.gl/jPSxC4r2vjPvtSmg8";
    }
  };
  const getRating = (nomorItem) => {
    const ratingStars = [];

    switch (nomorItem) {
      case 1:
      case 2:
      case 4:
        for (let star = 1; star <= 5; star++) {
          ratingStars.push(<FontAwesomeIcon icon={faStar} key={star} />);
        }
        break;
      case 6:
        for (let star = 1; star <= 4; star++) {
          ratingStars.push(<FontAwesomeIcon icon={faStar} key={star} />);
        }
        ratingStars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={5} />);
        break;
      case 3:
        for (let star = 1; star <= 5; star++) {
          ratingStars.push(<FontAwesomeIcon icon={faStar} key={star} />);
        }
        ratingStars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={6} />);
        break;
      default:
        for (let star = 1; star <= 4; star++) {
          ratingStars.push(<FontAwesomeIcon icon={faStar} key={star} />);
        }
        ratingStars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={5} />);
        break;
    }

    return ratingStars;
  };

  return (
    <>
      <div id="wisata" className="pt-2" style={{ backgroundColor: "rgba(155, 184, 205, 0.25)" }}>
        <Container>
          {/* tempat wisata */}
          <Row>
            <h1 className="text-center mb-5">Wisata Alam</h1>
            <Carousel
              nextIcon={<FontAwesomeIcon icon={faChevronRight} className="text-white rounded p-2 ms-4" style={{ backgroundColor: "#333A73" }} />}
              prevIcon={<FontAwesomeIcon icon={faChevronLeft} className="text-white rounded p-2 me-4" style={{ backgroundColor: "#333A73" }} />}
            >
              {[0, 1].map((carouselIndex) => (
                <Carousel.Item key={carouselIndex}>
                  <div className="d-flex justify-content-center">
                    {[1, 2, 3].map((cardIndex) => {
                      const actualCardIndex = carouselIndex * 3 + cardIndex;

                      return (
                        <>
                          <div>
                            <Col key={actualCardIndex} xs={12} md={6} lg={3} className="mb-4">
                              <Card className="mx-3" style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={getGambarWisata(actualCardIndex)} style={{ height: "40%" }} />
                                <Card.Body>
                                  <Card.Title>{getTempatWisata(actualCardIndex)}</Card.Title>
                                  <div className="rating text-warning mb-3">{getRating(actualCardIndex)}</div>
                                  <Card.Text>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-danger" />
                                    {getLokasi(actualCardIndex)}
                                  </Card.Text>
                                  <a href={getMaps(actualCardIndex)} target="_blank" className="btn btn-primary">
                                    Lihat tempat di Peta
                                  </a>
                                </Card.Body>
                              </Card>
                            </Col>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Row>

          {/* tempat sejarah */}
          <Row className="mt-5 ">
            <h1 className="text-center my-5">Tempat Bersejarah</h1>
            <Col lg={4} xs={5}>
              <div id="list-example" className="list-group">
                {[1, 2, 3, 4].map((nomorItem) => (
                  <a key={nomorItem} className={`list-group-item list-group-item-action ${itemDipilih === nomorItem ? "active" : ""}`} onClick={() => handleItemClick(nomorItem)}>
                    {getHeading(nomorItem)}
                  </a>
                ))}
              </div>
            </Col>
            <Col lg={8} xs={7}>
              <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="border p-3 shadow  bg-white rounded">
                {[1, 2, 3, 4].map((nomorItem) => (
                  <div key={nomorItem} style={{ display: itemDipilih === nomorItem ? "block" : "none" }}>
                    <div className="d-flex justify-content-center">
                      <Image src={getGambarByNomor(nomorItem)} className="border border-5 rounded border-bg-secondary-subtle" fluid style={{ width: "20rem" }} />
                    </div>
                    <h4 className="mt-3 text-center" id={`list-item-${nomorItem}`}>
                      {getHeading(nomorItem)}
                    </h4>
                    <p className="lh-lg" style={{ textAlign: "justify" }}>
                      {getDeskripsiByNomor(nomorItem)}
                    </p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150 opacity-25">
        <path
          d="M 0,400 L 0,150 C 82.39234449760764,112.32535885167464 164.78468899521528,74.65071770334927 274,87 C 383.2153110047847,99.34928229665073 519.2535885167465,161.72248803827753 619,172 C 718.7464114832535,182.27751196172247 782.2009569377989,140.45933014354065 853,115 C 923.7990430622011,89.54066985645935 1001.9425837320575,80.4401913875598 1101,89 C 1200.0574162679425,97.5598086124402 1320.0287081339711,123.77990430622009 1440,150 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#9bb8cd"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    </>
  );
};

export default Wisata;
