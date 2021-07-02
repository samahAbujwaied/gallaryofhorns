import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
export class FormData extends Component {



    filterd=(e)=>{
        let data = {}
        let event = e.target.value;
        console.log(event)
        console.log(this.props.fliterdata)
        if(event!=='all'){
           data= this.props.fliterdata.filter(item=>{
                if(item.horns == event)
                return item
            })
        }
        else data= this.props.fliterdata;
        this.props.filterdData(data)
        console.log(data)
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                        <Form.Label>Select to filter items by horns :</Form.Label>
                        <Form.Control as="select" size="sm" custom onChange={this.filterd} >
                            <option value="all">all </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100"> 100</option>
                        </Form.Control>
                    </Form.Group>
                                            {/* <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                            <Form.Label>Custom select Large</Form.Label>
                            <Form.Control as="select" size="lg" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Form.Control>
                        </Form.Group> */}
                </Form>

            </div>
        )
    }
}

export default FormData
