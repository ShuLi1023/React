import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Label, Row} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Comment extends Component{
    constructor(props){
        super(props)
        this.state = {
            rating: 1,
            name: '',
            comment: '',
            isModalOpen:false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]:value
        });
    }

    handleSubmit(values){
        this.toggleModal();
        alert('Current State is: ' + JSON.stringify(values));
        //event.preventDefault();
    }

    render() {
        return (
        <React.Fragment>
        <Button outline onClick={this.toggleModal}>
                      <span className="fa fa-pencil fa-lg"></span>
                      Submit Comment
        </Button>
        
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
                 <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                     <Row className="form-group">
                         <Label htmlFor="rating">Rating</Label>
                         <Control.select model=".rating" name="rating" className="form-control" md={10}
                         value={this.state.rating}
                         onChange={this.handleInputChange}>
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                         </Control.select>     
                     </Row>
                     <Row className="form-group">
                         <Label htmlFor="username">Your Name</Label>
                         <Control.text model=".name" id="name" name="name"
                          placeholder="Your Name"
                          className="form-control"
                          validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}
                          />
                          <Errors 
                            className="text-danger"
                            model=".name"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }} />
                     </Row>
                     <Row className="form-group">
                         <Label htmlFor="comment">Comment</Label>
                         <Control.textarea model=".comment" id="comment" name="comment" 
                                           rows="10" 
                                           className="form-control" />
                     </Row>
                     <Row className="form-group">
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                     </Row>
                 </LocalForm>
            </ModalBody>
        </Modal>
        </React.Fragment>
        );
    }
}
export default Comment
