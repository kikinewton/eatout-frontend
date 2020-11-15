import {
  Card,
  CardImg,
  CardTitle,
  CardImgOverlay,
} from "reactstrap";
import { useState } from "react";
import DishDetail from "./DishDetailComponent";

const Menu = (props) => {
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dish) => {
        setSelectedDish(dish);
  };

  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <Card  onClick={() => onDishSelect(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div className="row">
        <DishDetail selectedDish={selectedDish} />
      </div>
    </div>
  );
};

export default Menu;
