import Modal from 'react-bootstrap/lib/Modal';
export default props => {
    return(
        <Modal onHide={e => props.close(e, "itemVal")} style={{marginTop:'16%'}} show={props.open} bsSize="sm">
           <Modal.Body style={{background:'#ff8c00'}}>
                Processing Item            </Modal.Body>
        </Modal>   

    )
}
