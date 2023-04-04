import PropTypes from 'prop-types';
//import { Modal, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button'

var Body = ({ children }) => (
    <Modal.Body>{children}</Modal.Body>
);

var Footer = ({ children }) => (
    <Modal.Footer>{children}</Modal.Footer>    
);

const ModalView = ({ close, open, title, children, size }) => (
    <Modal className='custom-modal' bsSize={ size } show={open} onHide={e => close(e)}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
            {children.map(child=>child)}
    </Modal>
);


ModalView.propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.node,
    title: PropTypes.string,
    close: PropTypes.func.isRequired,
};

export default { ModalView, Body, Footer };
