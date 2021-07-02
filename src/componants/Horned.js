import React, { Component } from 'react'
import { Button,Card,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { set } from 'lodash';
class Horned extends Component {
    constructor(props){
        super(props);
        this.state={
            numberOfVotes:0
        }

    }
    votes= ()=>{
        this.setState({
            numberOfVotes:this.state.numberOfVotes+1
        })
    }
    modalhorned=()=>{
        this.props.modal({
            title:this.props.title,
            image_url:this.props.image_url,
            description:this.props.description
        })
    }
    render() {
        return (
            <Col sm={12} md={9} lg={6} xl={4} style={{ paddingTop: "10vh", paddingLeft: "10vh" }} >
                <Card style={{ width: '18.25rem',height:'32rem' , border: '2px solid black' }}>
                    <Card.Img onClick={this.modalhorned} variant="top" style={{ width: '18rem' , height:'20rem'}} src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                           {this.props.description}
                        </Card.Text>
                        <Button variant="primary" onClick={this.votes}>{this.state.numberOfVotes}</Button>
                    </Card.Body>
                </Card>
                </Col>
        )
    }
}

export default Horned
