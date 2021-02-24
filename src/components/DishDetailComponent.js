import React, { useState } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardText,
  BreadcrumbItem,
  Breadcrumb,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { LocalForm, Control, Errors } from "react-redux-form";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { Fade, FadeTransform, Stagger } from "react-animation-components";

const CommentForm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;

  const handleSubmit = (values) => {
    toggleModal();
    console.log("values :", values);
    props.postComment(
      props.dishId,
      values.rating,
      values.author,
      values.comment
    );
    alert("Current State is: " + JSON.stringify(values));
  };

  return (
    <div>
      <Button
        outline
        color="white"
        class="btn btn-outline-dark"
        onClick={toggleModal}
      >
        <span className="fa fa-pencil fa-lg"></span> Send Comment
      </Button>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <Row className="form-group">
              <Col>
                <Label htmlFor="">Rating</Label>
                <Control.select
                  model=".rating"
                  id="rating"
                  className="form-control"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Col>
            </Row>

            <Row className="form-group">
              <Col>
                <Label htmlFor="author">Author</Label>
                <Control.text
                  model=".author"
                  name="author"
                  id="author"
                  placeholder="Your name"
                  className="form-control"
                  validators={{
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    minLength: "Characters must be more than 2",
                    maxLength: "Characters must be less than 15",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Col>
                <Label htmlFor="comment" id="comment">
                  Comment
                </Label>
                <Control.textarea
                  model=".comment"
                  name="comment"
                  id="comment"
                  placeholder="Your comment"
                  className="form-control"
                  rows="6"
                />
              </Col>
            </Row>

            <Button color="primary" className="btn btn-primary">
              Submit
            </Button>
          </LocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
};

const RenderSelectDish = (dish) => {
  console.log("dish from renderSelectDish", { dish });
  if (dish != null) {
    return (
      <FadeTransform
        in
        transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
      >
        <Card key={dish.id}>
          <CardImg top src={baseUrl + dish.image} />
          <CardBody>
            <CardTitle>
              <b>{dish.name}</b>
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  } else {
    return (
      <div>
        <p>error</p>
      </div>
    );
  }
};

const RenderComment = ({ comments, postComment, dishId }) => {
  if (comments !== null) {
    
    const commentList = comments.map((comment) => {
      return (
        <Stagger in>
        <div key={comment.id}>
          <ul className="list-unstyled">
            <Fade in>
            <li>
              <p>{comment.comment}</p>
            </li>
            <li>
              <p>
                -- {comment.author}, &nbsp;
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                }).format(new Date(comment.date))}
              </p>
            </li>
            </Fade>
          </ul>
        </div>
        </Stagger>
      );
    });
    return (
      <div>
        {commentList}
        <CommentForm postComment={postComment} dishId={dishId} />
      </div>
    );
  }
};

const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h3>{props.errMess}</h3>
        </div>
      </div>
    );
  } else if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {RenderSelectDish(props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            <div>
              <h4>Comments</h4>
            </div>
            <RenderComment
              comments={props.comments}
              postComment={props.postComment}
              dishId={props.dish.id}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
