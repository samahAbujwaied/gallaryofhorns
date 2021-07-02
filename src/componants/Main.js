import React, { Component } from 'react'
import Horned from './Horned'
import { Container, CardGroup, Card, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
class Main extends Component {
    render() {
        return (
            <Container sm={12} md={9} lg={6} xl={3} fluid>
                <CardGroup className="m-5 d-block">
                    <Card className="m-5 border-0 shadow">
                        <Row >
                            {
                                this.props.dataa.map(item => {
                                    return (
                                        <Horned
                                            title={item.title}
                                            image_url={item.image_url}
                                            description={item.description}
                                            modal={this.props.modal}
                                        />
                                    )

                                })

                            }
                            {/* {
                                this.props.data.map(item => {
                                    return (
                                        <HornedBeast
                                            title={item.title}
                                            img_url={item.image_url}
                                            description={item.description}
                                            modal={this.props.selectedmodal}

                                        />
                                    )
                                })
                            } */}
                        </Row>
                    </Card>
                </CardGroup>
            </Container>



        )
    }
}

export default Main
