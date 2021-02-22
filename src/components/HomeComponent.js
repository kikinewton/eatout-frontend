import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

const Home = (props) => {

  console.log("props home", props);

  function RenderCard({ item, isLoading, errMess }) {
    console.log("item, isLoading, errMess", { item , isLoading, errMess });
    if (isLoading) {
      return <Loading />;
    } else if (errMess) {
      return <h3>{errMess}</h3>;
    } else {
      return (
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? (
              <CardSubtitle>{item.designation}</CardSubtitle>
            ) : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  }

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errMess={props.dishesErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} 
          isLoading={props.promosLoading}
          errMess={props.promosErrMess}/>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader}
          isLoading={props.leaderLoading} 
          errMess={props.leaderErrMess}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
