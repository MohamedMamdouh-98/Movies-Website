import React from "react";
import { Col } from "react-bootstrap";
import "./Card.css";
import {Link} from 'react-router-dom'
const CardMovie = ({ mov }) => {
  return (
    <Col md={3} className=" mt-3">
    <Link to={`/MoviItem/${mov.id}`}>
      <div className="card-movie shadow">
      <img src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} />
        <div className="over-lay"></div>
        <div className="over-lay-x">
        <p>{mov.title} : اسم الفيلم</p>
        <p>{mov.release_date}</p>
        <p>{mov.vote_count} : عدد المقيمين</p>
        <p>{mov.vote_average} : التقييم</p>
        </div>
      </div>
      </Link>
    </Col>
  );
};

export default CardMovie;
