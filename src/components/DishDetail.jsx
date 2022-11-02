import React, { Component } from 'react';
import { Parallax, Background } from "react-parallax";
import {
  Card, CardImg, CardText, CardBody, CardTitle, CardGroup, Breadcrumb, BreadcrumbItem, Modal, Button,
  ModalHeader, ModalBody, Label, Col, Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => val && (val.length >= len) && val;

// class CommentForm extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       isModalOpen: false
//     };

//     this.toggleModal = this.toggleModal.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   toggleModal() {
//     this.setState({
//       isModalOpen: !this.state.isModalOpen
//     });
//   }

//   handleSubmit(values) {
//     this.toggleModal();
//     console.log('Current State is: ' + JSON.stringify(values));
//     alert('Current State is: ' + JSON.stringify(values));
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Button outline onClick={this.toggleModal}>
//           <span className="fa fa-pencil fa-lg"></span> Submit Comment
//         </Button>
//         <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//           <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
//           <ModalBody>
//             <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
//               <Row className="form-group">
//                 <Label htmlFor="rating" md={2}>Rating</Label>
//                 <Col md={{ size: 10 }}>
//                   <Control.select model=".rating" id="rating" name="rating" className="form-control">
//                     <option>1</option>
//                     <option>2</option>
//                     <option>3</option>
//                     <option>4</option>
//                     <option>5</option>
//                   </Control.select>
//                 </Col>
//               </Row>
//               <Row className="form-group">
//                 <Label htmlFor="author" md={2}>Your Name</Label>
//                 <Col md={10}>
//                   <Control.text model=".author" id="author" name="author" placeholder="Your Name"
//                     className="form-control" validators={{
//                       required, minLength: minLength(3), maxLength: maxLength(15)
//                     }} />
//                   <Errors
//                     className="text-danger" model=".author" show="touched" messages={{
//                       required: 'Required',
//                       minLength: 'Must be greater than 2 characters',
//                       maxLength: 'Must be 15 characters or less'
//                     }}
//                   />
//                 </Col>
//               </Row>
//               <Row className="form-group">
//                 <Label htmlFor="comment" md={2}>Comment</Label>
//                 <Col md={10}>
//                   <Control.textarea model=".comment" id="comment" name="comment" rows="6"
//                     className="form-control" />
//                 </Col>
//               </Row>
//               <Row className="form-group">
//                 <Col md={{ size: 10, offset: 2 }}>
//                   <Button type="submit" color="primary">Submit
//                   </Button>
//                 </Col>
//               </Row>
//             </LocalForm>
//           </ModalBody>
//         </Modal>
//       </React.Fragment>
//     );
//   }
// }

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-lg-6 align-self-center">
      <Card className="bg-black">
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle><h3>{dish.name}</h3></CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

function RenderComments({ comments }) {
  if (comments == null) {
    return (<div></div>);
  }
  const cmnts = comments.map((comment) => {
    return (
      <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author},&nbsp;
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
          }).format(new Date(comment.date))}
        </p>
      </li>
    )
  })
  return (
    <div className='col-12 col-lg-6 align-self-center'>
      <Card className="bg-black p-2">
        <CardTitle><h3>Comments</h3></CardTitle>
        <CardBody>
          <ul className='list-unstyled'>
            {cmnts}
            {/* <CommentForm/> */}
          </ul>
        </CardBody>
      </Card>
    </div>
  )
}

const DishDetail = (props) => {
  const insideStyles = {
    background: "transparent",
    padding: 30,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };
  if (props.dish == null) {
    return (<div></div>)
  }
  return (
    <>
      <Parallax
        blur={{ min: 0, max: 5 }}
        strength={150}
      >
        <Background className="bg-page2-image">
          <div>
            <div style={insideStyles}></div>
          </div>
        </Background>
        <div style={{ height: 200 }} className="row align-items-center text-white">
          <div className="col">
            <h1>page 2</h1>
          </div>
        </div>
      </Parallax>

      <div className="bg-page2 pb-5">

        <div className="container text-white">

          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/page2" className="App-link">Page 2</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center p-5">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.comments} />
          </div>
        </div>



      </div>
    </>
  );
}

export default DishDetail;