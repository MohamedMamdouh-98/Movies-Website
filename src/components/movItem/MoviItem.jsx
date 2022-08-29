import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./movieItem.css";

const MoviItem = () => {
  const [movItem, setMovItem] = useState([]);
  const pram = useParams();
  console.log(pram.id);
  // get all movies by axios
  const getDetelsMov = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${pram.id}?api_key=4a9342afc5b2e7ad55435e2401571da2&language=ar`
    );
    setMovItem(res.data);
  };

  useEffect(() => {
    getDetelsMov();
  }, []);
  return (
    <div className="my-3 movItem">
      <Row className='flex-column-reverse flex-lg-row'>
        <Col md={6}>
          <div className="text-item" style={{ color: "#fff" }}>
            <h2>{movItem.title}</h2>
            <p>{movItem.overview}</p>
            <p>{movItem.vote_count} :  عدد التقيمات </p>
            <p>{movItem.vote_average} :  التقييم </p>
            <div className="buttons py-3">
              <Link to="/">
                <button> الرئيسية</button>
              </Link>
              <a href={movItem.homepage}>
                <button>مشاهدة الفيلم</button>
              </a>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="img-item">
            <img
              style={{ width: "100%", height: "100%" }}
              src={`https://image.tmdb.org/t/p/w500/${movItem.poster_path}`}
            />
          </div>
        </Col>
      </Row>
    </div>
    /*      <div style={{ width: "200px", height: "200px" }}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={`https://image.tmdb.org/t/p/w500/${movItem.poster_path}`}
        />
      </div>
      <p>اسم الفيلم : {movItem.title}</p>
      <p>تاريخ الفيلم : {movItem.release_date}</p>
      <p>عدد التفيمات : {movItem.vote_count}</p>
      <p> التقيم: {movItem.vote_average}</p>
      <p>قصة الفيلم : {movItem.overview}</p>
      <Link to="/">
        <button> الرئيسية</button>
      </Link>
      <a href={movItem.homepage}>
        <button>مشاهدة الفيلم</button>
      </a> */
  );
};

export default MoviItem;
