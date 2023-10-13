import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.css";

export default function Mod(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="modal_heading"
        >
          {props.data.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.data.description.map((item) => {
          return <p>{item}</p>;
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal_close_btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
