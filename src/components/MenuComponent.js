import {
  Card,
  CardImg,
  CardTitle,
  CardImgOverlay,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";



const RenderMenuItem = ({ dish}) => {
  if (dish === null || undefined) return <div><h3>No dish</h3></div>;
  return (
    <Card key={dish.id}>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name}/>
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
};

const Menu = (props) => {

  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="col-12">
        <h3>Menu</h3>
        <hr />
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
