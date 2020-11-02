import React, { useState } from "react";
import { Card, CardTitle, CardBody, CardImg, CardText } from "reactstrap";

const DishDetail = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [selectedDish, setSelectedDish] = useState(null);

  const renderSelectDish = (dish) => {
    dish = props.selectedDish;

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
      if (comments != null) {
        const dcom = comments.map((comment) =>  comment['comment']);
        console.log('dcom:', dcom);
      }
    comments = props.selectedDish;
    // const dcom = Object.keys(comments)
    
    console.log("comment:", comments);
    if (comments instanceof Array) {
      comments.map((comment) => {
        return (
          <div>
            <ul class="list-unstyled">
              <li>{comment.comment}</li>
              <li>
                {comment.author} {comment.date}
              </li>
            </ul>
          </div>
        );
      });
    } else {
      <div></div>;
    }
  };

  return (
    <div className="container">
      <div className="col-12 col-md-5 m-1">
        {renderSelectDish(selectedDish)}
      </div>
      <div className="col-12 col-md-5 m-1">
        <div>
          <h4>Comments</h4>
        </div>
        <div>{renderComment(selectedDish)}</div>
      </div>
    </div>
  );
};

export default DishDetail;
