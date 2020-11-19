import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardText,
  BreadcrumbItem,
  Breadcrumb,
} from "reactstrap";
import { Link } from "react-router-dom";

const renderSelectDish = (dish) => {
  if (dish != null) {
    return (
      <Card key={dish.id}>
        <CardImg top src={dish.image} />
        <CardBody>
          <CardTitle>
            <b>{dish.name}</b>
          </CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    <div>
      <p>error</p>
    </div>;
  }
};

const renderComment = (comments) => {
  console.log("comm", comments);
  if (comments !== null) {
    const commentList = comments.map((comment) => {
      return (
        <div key={comment.id}>
          <ul className="list-unstyled">
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
          </ul>
        </div>
      );
    });
    return commentList;
  }
  
};

const DishDetail = (props) => {
  if (props.dish != null) {
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
            {renderSelectDish(props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            <div>
              <h4>Comments</h4>
            </div>
            <div>{renderComment(props.comment)}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default DishDetail;
