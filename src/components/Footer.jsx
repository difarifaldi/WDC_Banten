import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Footer = () => {
  const [greetingsTextBoxValue, setGreetingsTextBoxValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  const teamMembers = [
    { name: "Adam Chrisamuel Alexander", socialMedia: { instagram: "https://www.instagram.com/admalxndr/", linkedin: "https://www.linkedin.com/in/adam-chrisamuel-alexander2907/" } },
    { name: "Muhammad Difa Rifaldi", socialMedia: { instagram: "https://www.instagram.com/difa_rifaldi/", linkedin: "https://www.linkedin.com/in/muhammad-difa-rifaldi-b2a5b6157/" } },
    { name: "Reyhan Denanto", socialMedia: { instagram: "https://www.instagram.com/denantorey/", linkedin: "https://www.linkedin.com/in/reyhan-denanto/" } },
  ];

  const handleSendGreetings = () => {
    console.log("Sending greetings:", greetingsTextBoxValue);

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setGreetingsTextBoxValue("");
  };

  return (
    <footer className="footer p-4" style={{ backgroundColor: "rgba(155, 184, 205, 0.25)" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <div className="me-5">
              <h5>
                Formality13 <span className="bg-danger-subtle px-2 border rounded">Politeknik Negeri Jakarta</span>
              </h5>
              <p className="lh-lg " style={{ textAlign: "justify" }}>
                Situs ini dibuat untuk berbagi keindahan dan keragaman Banten. Temukan pesona alam, sejarah, dan budayanya. Sambutlah keajaiban Banten melalui informasi dan gambar yang kami bagikan.
              </p>
            </div>
          </div>

          <div className="col-md-4 ">
            <h5>Anggota Tim</h5>
            {teamMembers.map((member, index) => (
              <div key={index} className="mb-2 sosmed">
                <span className="fw-medium">{member.name}</span>
                <div className="social-icons mt-1 d-flex">
                  <button className="btn btn-light me-2" style={{ padding: "0.3rem 0.7rem" }}>
                    <a href={member.socialMedia.instagram} className=" fs-5 text-black" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </button>
                  <button className="btn btn-light me-2" style={{ padding: "0.3rem 0.7rem" }}>
                    <a href={member.socialMedia.linkedin} className=" fs-5 text-black" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <h5>Kotak Saran</h5>
            <div className="mb-3">
              <textarea rows="4" className="form-control" placeholder="Kirim saran Anda di sini..." value={greetingsTextBoxValue} onChange={(e) => setGreetingsTextBoxValue(e.target.value)}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleSendGreetings}>
              Kirim
            </button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Saran Terkirim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Saran Anda &quot;{greetingsTextBoxValue}&quot; akan kami tampung. Terima kasih!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;
