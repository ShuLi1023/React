import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";
import Comment from "./CommentForm"

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
      </div>
    );
  else return <div></div>;
}

function RenderComments({ comments, addComment, dishId }) {
  if (comments != null) {
    const cmts = comments.map((cmt) => {
      return (
        <li key={cmt.id}>
          <p className="list-item">{cmt.comment}</p>
          <p className="list-item">
            -- {cmt.author} ,
            {new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }).format(new Date(cmt.date))}
          </p>
        </li>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">{cmts}</ul>
        <Comment dishId={dishId} addComment={addComment}/>

      </div>
      
    );
  } else return <div></div>;
}
const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments}
          addComment={props.addComment}
          dishId={props.dish.id} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
