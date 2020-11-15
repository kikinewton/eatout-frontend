import React, { Fragment } from "react";
import { Card, CardTitle, CardBody, CardImg, CardText } from "reactstrap";

const DishDetail = (props) => {
  // eslint-disable-next-line no-unused-vars

  //const [selectedDish, setSelectedDish] = useState(null);

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

  const renderComment = (dish) => {
    let { comments } = dish || {};

    if (comments instanceof Array) {
      return (
        <Fragment>
          {(comments || []).map((comment) => {
            return (
              <div key={comment.id} className="comment-container">
                <ul className="list-unstyled">
                  <li><p>{comment.comment}</p></li>
                  <li>
                    <p>{comment.author} {comment.date}</p>
                  </li>
                </ul>
              </div>
            );
          })}
        </Fragment>
      );
    } else {
      <div></div>;
    }
  };

  return (
    <div className="container">
      <span className="c">
        <div className="col-12 col-md-5 m-1">
          {renderSelectDish(props.selectedDish)}
        </div>
      </span>
      <span className='c'>
        <div className="col-12 col-md-5 m-1">
          <div>
            <h4>Comments</h4>
          </div>
          <div>{renderComment(props.selectedDish)}</div>
        </div>
      </span>
      <style jsx>{`
        span.c {
            display:flex; flex-direction:row;
        }
      `}</style>
    </div>
  );
};

export default DishDetail;
