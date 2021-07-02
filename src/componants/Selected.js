import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export class Selected extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showdata}>
                <Modal.Dialog>
                    <Modal.Header >
                        <Modal.Title>{this.props.arrmodal.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <img style={{width:'20vh'}} src={this.props.arrmodal.image_url}/>
                    </Modal.Body>
                    <Modal.Body>
                        <p>{this.props.arrmodal.description}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onClose} >Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
                </Modal>
            </div>
        )
    }
}

export default Selected
